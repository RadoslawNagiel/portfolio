import { Component, input, output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { isTouchScreen } from '../../functions/is-touch-screen';

@Component({
  selector: 'app-icon-button',
  imports: [TranslateModule, MatTooltipModule],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  readonly isTouchScreen = isTouchScreen();

  icon = input.required<string>();
  ariaLabel = input.required<string>();

  tooltip = input<string>();
  disabled = input<boolean>();

  clicked = output();
}
