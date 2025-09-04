import { Injectable, signal, OnDestroy } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: `root`,
})
export class SearchService implements OnDestroy {
  searchInProgress = signal(false);
  searchValue = signal(``);

  private searchSubject = new Subject<string>();
  private formSubscription = new Subscription();

  private constructor() {
    this.formSubscription.add(
      this.searchSubject
        .pipe(debounceTime(environment.searchDebounceMs))
        .subscribe((results) => {
          this.searchInProgress.set(false);
          this.searchValue.set(results);
        })
    );
  }

  valueChanged(value: string) {
    this.searchInProgress.set(true);
    this.searchSubject.next(value);
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
