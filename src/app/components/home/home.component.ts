import { DatePipe, NgStyle } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChildren,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectInfo, PROJECTS } from '../../shared/data/projects';
import { TagType } from '../../shared/data/tags';
import TagsComponent from '../../shared/dumb-components/tags/tags.component';
import { FiltersService } from '../../shared/services/filters.service';
import { TimelineComponent } from '../../shared/smart-components/timeline/timeline.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { DateTime } from 'luxon';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    TranslateModule,
    DatePipe,
    MatDialogModule,
    TagsComponent,
    TimelineComponent,
    NgStyle,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit, OnDestroy {
  readonly projects = PROJECTS;
  readonly TagType = TagType;

  readonly router = inject(Router);
  readonly dialog = inject(MatDialog);
  readonly filtersService = inject(FiltersService);
  readonly activatedRoute = inject(ActivatedRoute);

  readonly projectElements =
    viewChildren<ElementRef<HTMLDivElement>>(`projectElement`);

  selectedYear = signal(new Date().getFullYear());

  routerSubscription = new Subscription();

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.dialog.openDialogs.length) {
      return;
    }
    let index = this.projectElements().findIndex(
      (el) =>
        el.nativeElement.offsetTop >= document.documentElement.scrollTop + 200
    );
    if (index === -1) {
      index = this.projectElements().length;
    }
    const project = this.filtersService.filteredProjects()[index - 1];
    if (!project) {
      return;
    }
    if (project.inProgress) {
      this.selectedYear.set(new Date().getFullYear());
    } else {
      this.selectedYear.set(
        project.dateTo?.getFullYear() ?? project.dateFrom.getFullYear()
      );
    }
  }

  minDate = computed(() => {
    const projects = this.filtersService.filteredProjects();
    if (projects.length === 0) {
      return new Date();
    }
    return DateTime.fromJSDate(projects[projects.length - 1].dateFrom)
      .startOf(`month`)
      .minus({ month: 1 })
      .toJSDate();
  });

  ngOnInit() {
    this.routerSubscription = new Subscription();
    this.routerSubscription.add(
      this.activatedRoute.queryParams.subscribe((res) => {
        const id = res[`project`];
        if (id) {
          const selectedProject = this.projects.find(
            (project) => project.id === id
          );
          if (selectedProject) {
            this.dialog.open(ProjectModalComponent, {
              data: structuredClone(selectedProject),
            });
            firstValueFrom(this.dialog.afterAllClosed).then(() => {
              this.router.navigate([``]);
            });
          }
        }
      })
    );
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  scrollToYear(year: number) {
    const index = this.filtersService.filteredProjects().findIndex((el) => {
      let projectYear = el.dateTo?.getFullYear();
      if (!projectYear) {
        if (el.inProgress) {
          projectYear = new Date().getFullYear();
        } else {
          projectYear = el.dateFrom.getFullYear();
        }
      }
      return projectYear <= year;
    });
    if (index !== -1) {
      this.projectElements()[index]?.nativeElement.scrollIntoView({
        behavior: `smooth`,
        block: `end`,
      });
    }
  }

  openProject(projectId: string) {
    this.router.navigate([], {
      queryParams: {
        project: projectId,
      },
    });
  }

  getProjectExtraTags(project: ProjectInfo) {
    return structuredClone(project).tags.filter(
      (el) =>
        el.type === TagType.api ||
        el.type === TagType.library ||
        el.type === TagType.utility
    );
  }
}
