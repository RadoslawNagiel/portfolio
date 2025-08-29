import { Component, computed, inject, input, output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-icon-button',
  imports: [TranslateModule, MatTooltipModule],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  readonly translateService = inject(TranslateService);

  icon = input.required<string>();
  ariaLabel = input.required<string>();

  tooltip = input<string>();
  clicked = output();

  tooltipText = computed(() => {
    const tooltip = this.tooltip();
    if (tooltip) {
      return this.translateService.instant(tooltip);
    }
    return null;
  });
}
