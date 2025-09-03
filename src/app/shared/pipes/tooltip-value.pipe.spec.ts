import { TestBed } from '@angular/core/testing';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { TooltipValuePipe } from './tooltip-value.pipe';

describe('TooltipValuePipe', () => {
  let isTouchScreen: boolean;

  beforeEach(() => {
    isTouchScreen = false;
    spyOn(window, 'matchMedia').and.callFake((query: string) => {
      return {
        matches: isTouchScreen,
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
        addListener: () => {},
        removeListener: () => {},
      } as MediaQueryList;
    });

    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });
  });

  it('should return null if the touch screen', () => {
    TestBed.runInInjectionContext(() => {
      isTouchScreen = true;
      const pipe = new TooltipValuePipe();
      expect(pipe.transform(`Test`)).toBeNull();
    });
  });

  it(`should return null if the value is undefined`, () => {
    TestBed.runInInjectionContext(() => {
      isTouchScreen = false;
      const pipe = new TooltipValuePipe();
      expect(pipe.transform(undefined)).toBeNull();
    });
  });

  it(`should return the translated text when the value is defined`, () => {
    TestBed.runInInjectionContext(() => {
      isTouchScreen = false;
      const pipe = new TooltipValuePipe();
      expect(pipe.transform(`Test`)).toBe(`Test`);
    });
  });
});
