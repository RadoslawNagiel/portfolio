import { DatePipe, NgStyle } from '@angular/common';
import { Component, computed, ElementRef, HostListener, inject, OnDestroy, OnInit, signal, viewChildren } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DateTime } from 'luxon';
import { firstValueFrom, Subscription } from 'rxjs';
import { ProjectInfo, PROJECTS } from '../../shared/data/projects';
import { TagType } from '../../shared/data/tags';
import { FiltersService } from '../../shared/services/filters.service';
import TagsComponent from '../../shared/smart-components/tags/tags.component';
import { TimelineComponent } from '../../shared/smart-components/timeline/timeline.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, DatePipe, MatDialogModule, TagsComponent, TimelineComponent, NgStyle],
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

  readonly projectElements = viewChildren<ElementRef<HTMLDivElement>>(`projectElement`);

  readonly mainTop = signal(document.getElementById(`main`)?.offsetTop);

  selectedYear = signal(new Date().getFullYear());

  routerSubscription = new Subscription();

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.dialog.openDialogs.length) {
      return;
    }
    let index = this.projectElements().findIndex((el) => el.nativeElement.offsetTop >= document.documentElement.scrollTop + 200);
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
      this.selectedYear.set(project.dateTo?.getFullYear() ?? project.dateFrom.getFullYear());
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mainTop.set(document.getElementById(`main`)?.offsetTop);
  }

  maxDate = computed(() => {
    const projects = structuredClone(this.filtersService.filteredProjects()).sort((a, b) => b.dateFrom.getTime() - a.dateFrom.getTime());
    if (projects.length === 0) {
      return new Date();
    }
    return DateTime.fromJSDate(projects[0].inProgress ? new Date() : (projects[0].dateTo ?? projects[0].dateFrom))
      .endOf(`month`)
      .toJSDate();
  });

  minDate = computed(() => {
    const projects = structuredClone(this.filtersService.filteredProjects()).sort((a, b) => b.dateFrom.getTime() - a.dateFrom.getTime());
    if (projects.length === 0) {
      return new Date();
    }
    return DateTime.fromJSDate(projects[projects.length - 1].dateFrom)
      .startOf(`year`)
      .toJSDate();
  });

  ngOnInit() {
    this.routerSubscription = new Subscription();
    this.routerSubscription.add(
      this.activatedRoute.queryParams.subscribe((res) => {
        const id = res[`project`];
        if (id) {
          const selectedProject = this.projects.find((project) => project.id === id);
          if (selectedProject) {
            this.dialog.open(ProjectModalComponent, {
              data: structuredClone(selectedProject),
            });
            firstValueFrom(this.dialog.afterAllClosed).then(() => {
              this.router.navigate([``]);
            });
          }
        }
      }),
    );
    setTimeout(() => {
      this.onResize();
    }, 0);
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
    return structuredClone(project).tags.filter((el) => el.type === TagType.api || el.type === TagType.library || el.type === TagType.utility);
  }
}
