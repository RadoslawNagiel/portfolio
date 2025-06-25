import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { Gallery, ImageItem } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { ProjectInfo } from '../../../shared/data/projects';
import TagsComponent from '../../../shared/dumb-components/tags/tags.component';
import { getTagInfo } from '../../../shared/functions/tags';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-modal',
  imports: [
    MatDialogModule,
    MatButtonModule,
    TranslateModule,
    DatePipe,
    TagsComponent,
    LightboxModule,
    MatIconModule,
  ],
  templateUrl: './project-modal.component.html',
  styleUrl: `project-modal.styles.scss`,
})
export class ProjectModalComponent {
  readonly getTagInfo = getTagInfo;
  readonly galleryId = 'gallery-1';

  constructor(
    @Inject(MAT_DIALOG_DATA) public project: ProjectInfo,
    private gallery: Gallery
  ) {
    this.gallery
      .ref(this.galleryId)
      .load(
        this.project.images.map((el) => new ImageItem({ src: el, thumb: el }))
      );
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
