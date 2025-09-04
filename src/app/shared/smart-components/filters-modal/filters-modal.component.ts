import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { TAGS, TagType } from '../../data/tags';
import { MatButtonModule } from '@angular/material/button';
import { FiltersService } from '../../services/filters.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import TagsComponent from '../tags/tags.component';
import { FilterLabelComponent } from '../../dumb-components/filter-label/filter-label.component';

@Component({
  selector: 'app-filters-modal',
  imports: [MatDialogModule, TranslateModule, TagsComponent, MatButtonModule, FilterLabelComponent, MatTooltipModule],
  templateUrl: './filters-modal.component.html',
  styleUrl: `./filters-modal.styles.scss`,
})
export class FiltersModalComponent {
  readonly TagType = TagType;

  readonly filtersService = inject(FiltersService);

  allTags = Object.values(TAGS);
}
