import { Component, inject, input } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-toggle-language',
  imports: [TranslateModule, MatButtonToggleModule, MatTooltipModule],
  templateUrl: './toggle-language.component.html',
})
export class ToggleLanguageComponent {
  readonly languageService = inject(LanguageService);
  readonly languages = environment.availableLanguages;

  showTooltip = input(true);
}
