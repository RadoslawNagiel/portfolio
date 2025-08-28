import { Component, input, output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-filter-label',
  imports: [TranslateModule, MatTooltipModule],
  templateUrl: './filter-label.component.html',
  styleUrl: './filter-label.styles.scss',
})
export class FilterLabelComponent {
  label = input.required<string>();
  displayClearIcon = input(false);
  clear = output();
}
