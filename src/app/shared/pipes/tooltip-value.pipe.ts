import {
  Pipe,
  PipeTransform,
  ChangeDetectorRef,
  OnDestroy,
  inject,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { isTouchScreen } from '../functions/is-touch-screen';

@Pipe({
  name: 'tooltipValue',
  pure: false,
})
export class TooltipValuePipe implements PipeTransform, OnDestroy {
  private lastValue: string | undefined;
  private translated: string | null = null;
  private subscription?: Subscription;

  readonly translate = inject(TranslateService);
  readonly cdr = inject(ChangeDetectorRef);

  transform(value?: string): string | null {
    if (!value || isTouchScreen()) {
      return null;
    }

    if (value === this.lastValue && this.translated !== null) {
      return this.translated;
    }

    this.lastValue = value;

    this.subscription?.unsubscribe();

    this.subscription = this.translate.get(value).subscribe((translated) => {
      this.translated = translated;
      this.cdr.markForCheck();
    });

    return this.translated;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
