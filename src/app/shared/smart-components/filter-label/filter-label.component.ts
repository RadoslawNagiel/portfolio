import { Component, input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Tag } from '../../data/tags';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-filter-label',
  imports: [TranslateModule, MatTooltipModule],
  templateUrl: './filter-label.component.html',
  styleUrl: './filter-label.styles.scss',
})
export class FilterLabelComponent {
  label = input.required<string>();
  filters = input<Tag[]>([]);
  clear = output();
}
