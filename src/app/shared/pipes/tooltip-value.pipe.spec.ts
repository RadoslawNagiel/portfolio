import { TestBed } from '@angular/core/testing';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { TooltipValuePipe } from './tooltip-value.pipe';

describe('TooltipValuePipe', () => {
  let pipe: TooltipValuePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });
    TestBed.runInInjectionContext(() => {
      pipe = new TooltipValuePipe();
    });
  });

  it('should return null if the touch screen', () => {
    spyOn(window, 'matchMedia').and.callFake((query: string) => {
      return {
        matches: true,
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
        addListener: () => {},
        removeListener: () => {},
      } as MediaQueryList;
    });
    expect(pipe.transform(`Test`)).toBeNull();
  });

  it(`should return null if the value is undefined`, () => {
    expect(pipe.transform(undefined)).toBeNull();
  });

  it(`should return the translated text when the value is defined`, () => {
    expect(pipe.transform(`Test`)).toBe(`Test`);
  });
});
