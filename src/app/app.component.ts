import { Component, inject, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from './environments/environment';
import { LanguageService } from './shared/services/language.service';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, MatButtonToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  readonly languageService = inject(LanguageService);
  readonly themeService = inject(ThemeService);
  readonly languages = environment.availableLanguages;

  ngOnInit() {
    this.themeService.initTheme();
  }

  toggleTheme() {
    this.themeService.setMode(!this.themeService.isDarkThemeSelected());
  }
}
