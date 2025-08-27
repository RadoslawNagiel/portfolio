import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';
import { environment } from '../../environments/environment';

describe(`LanguageService`, () => {
  let service: LanguageService;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj(`TranslateService`, [`setDefaultLang`]);

    TestBed.configureTestingModule({
      providers: [
        LanguageService,
        { provide: TranslateService, useValue: spy },
      ],
    });

    service = TestBed.inject(LanguageService);
    translateServiceSpy = TestBed.inject(
      TranslateService
    ) as jasmine.SpyObj<TranslateService>;
  });

  it(`should be created`, () => {
    expect(service).toBeTruthy();
  });

  it(`#selectedLanguage should be set by default from the environment`, () => {
    expect(service.selectedLanguage()).toBe(environment.defaultLanguage);
  });

  it(`#selectedLanguage shouldn't change if the #setLanguage parameter is undefined`, () => {
    service.setLanguage(undefined);
    expect(service.selectedLanguage()).toBe(environment.defaultLanguage);
    expect(translateServiceSpy.setDefaultLang).not.toHaveBeenCalled();
  });

  it(`#selectedLanguage should be set if the #setLanguage parameter is not undefined`, () => {
    let lang = `en`;
    service.setLanguage(lang);
    expect(service.selectedLanguage()).toBe(lang);

    lang = `pl`;
    service.setLanguage(lang);
    expect(service.selectedLanguage()).not.toBe(lang);
  });
});
