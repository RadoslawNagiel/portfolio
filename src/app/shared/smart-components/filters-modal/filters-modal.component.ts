import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { TAGS, TagType } from '../../data/tags';
import TagsComponent from '../../dumb-components/tags/tags.component';
import { MatButtonModule } from '@angular/material/button';
import { FiltersService } from '../../services/filters.service';
import { FilterLabelComponent } from '../filter-label/filter-label.component';

@Component({
  selector: 'app-filters-modal',
  imports: [
    MatDialogModule,
    TranslateModule,
    TagsComponent,
    MatButtonModule,
    FilterLabelComponent,
  ],
  templateUrl: './filters-modal.component.html',
  styleUrl: `./filters-modal.styles.scss`,
})
export class FiltersModalComponent {
  readonly TagType = TagType;

  readonly filtersService = inject(FiltersService);

  allTags = Object.values(TAGS);
}
