import {
  Pipe,
  PipeTransform,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'tooltipValue',
  pure: false,
})
export class TooltipValuePipe implements PipeTransform, OnDestroy {
  private lastValue: string | undefined;
  private translated: string | null = null;
  private subscription?: Subscription;

  constructor(
    private translate: TranslateService,
    private cdr: ChangeDetectorRef
  ) {}

  transform(value?: string): string | null {
    if (!value) {
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
