import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SearchService } from './search.service';

describe(`SearchService`, () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService],
    });
    service = TestBed.inject(SearchService);
  });

  it(`should have the #searchInProgress set to false and the #searchValue empty at startup`, () => {
    expect(service.searchInProgress()).toBeFalse();
    expect(service.searchValue()).toBe(``);
  });

  it(`should set the #searchInProgress to true when requesting the #valueChanged function and restart it after 300ms`, fakeAsync(() => {
    service.valueChanged(`Test`);
    expect(service.searchInProgress()).toBeTrue();
    tick(300);
    expect(service.searchInProgress()).toBeFalse();
  }));

  it(`should set the #searchValue after 300ms when #searchValue is requested`, fakeAsync(() => {
    service.valueChanged(`Test`);
    expect(service.searchValue()).toBe(``);
    tick(300);
    expect(service.searchValue()).toBe(`Test`);
  }));

  it(`should send the last value to the #searchValue if the #valueChanged is requested multiple times in a short period of time`, fakeAsync(() => {
    service.valueChanged(`Test`);
    tick(200);
    expect(service.searchValue()).toBe(``);

    service.valueChanged(`Test 2`);
    tick(200);
    expect(service.searchValue()).toBe(``);

    service.valueChanged(`Test 3`);
    tick(300);
    expect(service.searchValue()).toBe(`Test 3`);
  }));

  it(`should clear the subscription in #ngOnDestroy`, () => {
    const spy = spyOn((service as any).formSubscription, `unsubscribe`);
    service.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});
