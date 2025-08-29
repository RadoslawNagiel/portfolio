import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-filter-label',
  imports: [TranslateModule, NgClass, IconButtonComponent],
  templateUrl: './filter-label.component.html',
  styleUrl: './filter-label.styles.scss',
})
export class FilterLabelComponent {
  label = input.required<string>();
  buttonTooltip = input(`filters.clearTooltip`);
  labelClass = input<string>();
  displayClearIcon = input(false);
  clear = output();
}
