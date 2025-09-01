import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  output,
  signal,
  SimpleChanges,
  viewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { IconButtonComponent } from '../../dumb-components/icon-button/icon-button.component';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  imports: [
    TranslateModule,
    FormsModule,
    IconButtonComponent,
    NgClass,
    ReactiveFormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.styles.scss',
})
export class SearchComponent implements OnChanges, OnInit, OnDestroy {
  interactive = input(true);
  disabled = input(false);
  closed = output();

  readonly searchService = inject(SearchService);
  readonly inputEl = viewChild<ElementRef<HTMLInputElement>>(`inputEl`);
  opened = signal(false);

  readonly form = new FormGroup({
    searchValue: new FormControl<string | undefined>(undefined, [
      Validators.maxLength(255),
    ]),
  });

  private formSubscription = new Subscription();

  ngOnChanges(changes: SimpleChanges) {
    if (changes[`interactive`]) {
      this.opened.set(!this.interactive());
    }
    if (changes[`disabled`]) {
      if (this.disabled()) {
        this.form.controls.searchValue.disable();
      } else {
        this.form.controls.searchValue.enable();
      }
    }
  }

  ngOnInit() {
    this.formSubscription.add(
      this.form.valueChanges.subscribe((event) => {
        this.searchService.valueChanged(event.searchValue ?? ``);
      })
    );
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }

  openSearch() {
    this.opened.set(true);
    this.inputEl()?.nativeElement.focus();
  }

  closeSearch() {
    if (this.interactive()) {
      this.opened.set(false);
    } else {
      this.closed.emit();
    }
    this.form.reset();
  }
}
