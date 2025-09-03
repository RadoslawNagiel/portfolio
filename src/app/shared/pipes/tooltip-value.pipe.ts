import { inject, Pipe, PipeTransform } from '@angular/core';
import { isTouchScreen } from '../functions/is-touch-screen';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'tooltipValue',
})
export class TooltipValuePipe implements PipeTransform {
  readonly translateService = inject(TranslateService);

  transform(value?: string): string | null {
    if (isTouchScreen()) {
      return null;
    }
    if (!value) {
      return null;
    }
    return this.translateService.instant(value);
  }
}
