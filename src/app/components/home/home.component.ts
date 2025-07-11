import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectInfo, PROJECTS } from '../../shared/data/projects';
import { TagType } from '../../shared/data/tags';
import TagsComponent from '../../shared/dumb-components/tags/tags.component';
import { FiltersService } from '../../shared/services/filters.service';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, DatePipe, MatDialogModule, TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {
  readonly projects = PROJECTS;
  readonly TagType = TagType;

  readonly dialog = inject(MatDialog);
  readonly filtersService = inject(FiltersService);

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
