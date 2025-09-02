import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { isTouchScreen } from '../../functions/is-touch-screen';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-toggle-language',
  imports: [TranslateModule, MatButtonToggleModule, MatTooltipModule],
  templateUrl: './toggle-language.component.html',
})
export class ToggleLanguageComponent {
  readonly isTouchScreen = isTouchScreen();
  readonly languageService = inject(LanguageService);
  readonly languages = environment.availableLanguages;
}
