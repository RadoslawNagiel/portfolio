import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectInfo } from '../../../shared/data/projects';
import TagsComponent from '../../../shared/dumb-components/tags/tags.component';
import { getTagInfo } from '../../../shared/functions/tags';

@Component({
  selector: 'app-project-modal',
  imports: [
    MatDialogModule,
    MatButtonModule,
    TranslateModule,
    DatePipe,
    TagsComponent,
  ],
  templateUrl: './project-modal.component.html',
  styleUrl: `project-modal.styles.scss`,
})
export class ProjectModalComponent {
  readonly getTagInfo = getTagInfo;

  constructor(@Inject(MAT_DIALOG_DATA) public project: ProjectInfo) {}
}
