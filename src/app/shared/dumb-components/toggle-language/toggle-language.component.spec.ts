import { fakeAsync, tick } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { render } from '@testing-library/angular';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { environment } from '../../../environments/environment';
import { LanguageService } from '../../services/language.service';
import { ToggleLanguageComponent } from './toggle-language.component';

describe(`ToggleLanguageComponent`, () => {
  let spyLanguageService: jasmine.SpyObj<LanguageService>;

  const defaultLanguageValue = environment.availableLanguages.find((el) => el.langKey === environment.defaultLanguage)!.value;
  const secondLanguage = environment.availableLanguages[1];
  const availableLanguages = environment.availableLanguages;

  const setup = async () => {
    spyLanguageService = jasmine.createSpyObj('LanguageService', ['selectedLanguage', 'setLanguage']);
    spyLanguageService.selectedLanguage.and.returnValue(environment.defaultLanguage);

    return render(ToggleLanguageComponent, {
      imports: [TranslateModule.forRoot(), MatButtonToggleModule, MatTooltipModule],
      providers: [{ provide: LanguageService, useValue: spyLanguageService }],
    });
  };

  it('renderuje wszystkie opcje języka', async () => {
    await setup();
    for (const lang of environment.availableLanguages) {
      expect(screen.getByText(lang.value)).toBeDefined();
    }
  });

  it(`should display all language buttons from the environment`, async () => {
    await setup();
    for (const language of availableLanguages) {
      expect(await screen.findByText(language.value)).toBeDefined();
    }
  });

  it(`should highlighted the selected language`, async () => {
    await setup();
    const button = screen.getByRole('radio', { name: defaultLanguageValue });
    expect(button.parentElement).toHaveClass(`mat-button-toggle-checked`);
  });

  it(`should call the #setLanguage function when the button is clicked`, fakeAsync(async () => {
    const { fixture } = await setup();
    const languageService = fixture.debugElement.injector.get(LanguageService);

    const button = screen.getByRole(`radio`, {
      name: secondLanguage.value,
    });

    userEvent.click(button);
    tick(0);
    expect(languageService.setLanguage).toHaveBeenCalledWith(secondLanguage.langKey);
  }));
});
