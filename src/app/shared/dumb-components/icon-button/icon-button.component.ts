import { Component, input, output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-icon-button',
  imports: [TranslateModule, MatTooltipModule],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  icon = input.required<string>();
  ariaLabel = input.required<string>();

  tooltip = input<string>();
  clicked = output();
}
