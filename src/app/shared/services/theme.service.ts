import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: `root`,
})
export class ThemeService {
  isDarkThemeSelected = signal(false);

  constructor() {
    this.initTheme();
  }

  initTheme() {
    const results = localStorage.getItem(`dark-theme`);
    if (results) {
      this.setMode(results === `true`);
    } else {
      this.setDefaultTheme();
    }
  }

  setMode(darkTheme: boolean) {
    this.isDarkThemeSelected.set(darkTheme);
    localStorage.setItem('dark-theme', `${darkTheme}`);
    document.documentElement.classList.toggle('ion-palette-dark', darkTheme);
  }

  setDefaultTheme() {
    const darkTheme = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
    this.setMode(darkTheme);
  }
}
