import { DatePipe, NgStyle } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChildren,
} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectInfo, PROJECTS } from '../../shared/data/projects';
import { TagType } from '../../shared/data/tags';
import TagsComponent from '../../shared/dumb-components/tags/tags.component';
import { FiltersService } from '../../shared/services/filters.service';
import { TimelineComponent } from '../../shared/smart-components/timeline/timeline.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';

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
export default class HomeComponent {
  readonly projects = PROJECTS;
  readonly TagType = TagType;

  readonly dialog = inject(MatDialog);
  readonly filtersService = inject(FiltersService);

  readonly projectElements =
    viewChildren<ElementRef<HTMLDivElement>>(`projectElement`);

  selectedYear = signal(new Date().getFullYear());

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let index = this.projectElements().findIndex(
      (el) =>
        el.nativeElement.offsetTop >= document.documentElement.scrollTop + 200
    );
    if (index === -1) {
      index = this.projectElements().length;
    }
    const project = this.filtersService.filteredProjects()[index - 1];
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
    return projects[projects.length - 1].dateFrom;
  });

  openDialog(selectedProject: ProjectInfo) {
    this.dialog.open(ProjectModalComponent, {
      data: selectedProject,
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
