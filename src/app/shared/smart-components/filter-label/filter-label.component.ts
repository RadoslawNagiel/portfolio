import { Component, input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Tag } from '../../data/tags';

@Component({
  selector: 'app-filter-label',
  imports: [TranslateModule],
  templateUrl: './filter-label.component.html',
  styleUrl: './filter-label.styles.scss',
})
export class FilterLabelComponent {
  label = input.required<string>();
  filters = input<Tag[]>([]);
  clear = output();
}
