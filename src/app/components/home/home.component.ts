import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectInfo, PROJECTS } from '../../shared/data/projects';
import TagsComponent from '../../shared/dumb-components/tags/tags.component';
import { getTagInfo } from '../../shared/functions/tags';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, DatePipe, MatDialogModule, TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {
  readonly projects = PROJECTS;
  readonly getTagInfo = getTagInfo;

  readonly dialog = inject(MatDialog);

  openDialog(selectedProject: ProjectInfo) {
    this.dialog.open(ProjectModalComponent, {
      data: selectedProject,
    });
  }
}
