import { DatePipe } from '@angular/common';
import { Component, computed, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { Gallery, ImageItem, YoutubeItem } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { ProjectInfo } from '../../../shared/data/projects';
import TagsComponent from '../../../shared/dumb-components/tags/tags.component';
import { TagType } from '../../../shared/data/tags';

@Component({
  selector: 'app-project-modal',
  imports: [
    MatDialogModule,
    MatButtonModule,
    TranslateModule,
    DatePipe,
    TagsComponent,
    LightboxModule,
  ],
  templateUrl: './project-modal.component.html',
  styleUrl: `project-modal.styles.scss`,
})
export class ProjectModalComponent implements OnInit {
  readonly TagType = TagType;
  readonly galleryId = 'gallery-1';

  galleryItems = computed(() => {
    return this.project.images.map((el) => {
      const element = {
        src: el.url,
        thumb: el.thumb,
      };
      if (el.type === `youtube`) {
        return new YoutubeItem(element);
      }
      return new ImageItem(element);
    });
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public project: ProjectInfo,
    private gallery: Gallery,
    private lightbox: Lightbox
  ) {}

  ngOnInit() {
    this.gallery.ref(this.galleryId).load(this.galleryItems());
  }

  openInFullScreen(index: number) {
    this.lightbox.open(index, this.galleryId, {
      panelClass: 'fullscreen',
    });
  }
}
