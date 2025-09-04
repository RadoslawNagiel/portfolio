import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { LanguageService } from '../../services/language.service';
import { TooltipValuePipe } from '../../pipes/tooltip-value.pipe';

@Component({
  selector: 'app-toggle-language',
  imports: [TranslateModule, MatButtonToggleModule, MatTooltipModule, TooltipValuePipe],
  templateUrl: './toggle-language.component.html',
})
export class ToggleLanguageComponent {
  readonly languageService = inject(LanguageService);
  readonly languages = environment.availableLanguages;
}
