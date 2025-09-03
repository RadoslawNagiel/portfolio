import { Component, input, output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipValuePipe } from '../../pipes/tooltip-value.pipe';

@Component({
  selector: 'app-icon-button',
  imports: [TranslateModule, MatTooltipModule, TooltipValuePipe],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  icon = input.required<string>();
  ariaLabel = input.required<string>();

  tooltip = input<string>();
  disabled = input<boolean>();

  clicked = output();
}
