import { NgClass } from '@angular/common';
import { Component, HostListener, signal, viewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IconButtonComponent } from './shared/dumb-components/icon-button/icon-button.component';
import { TopIconButtonComponent } from './shared/dumb-components/top-button/top-button.component';
import { MenuItemsComponent } from './shared/smart-components/menu-items/menu-items.component';
import { SearchComponent } from './shared/smart-components/search/search.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, MatSidenavModule, IconButtonComponent, MenuItemsComponent, TopIconButtonComponent, SearchComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly searchComponent = viewChild(SearchComponent);

  menuOpened = signal(false);
  showSearch = signal(false);

  windowWidth = signal(window.innerWidth);

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth.set(window.innerWidth);
  }

  toggleMenu() {
    this.menuOpened.set(!this.menuOpened());
    this.setScroll();
  }

  setScroll() {
    const body = document.getElementById(`body-element`);
    if (body) {
      body.style.overflow = this.menuOpened() ? `hidden` : `auto`;
    }
  }

  openMobileSearch() {
    this.showSearch.set(true);
    this.menuOpened.set(false);
    setTimeout(() => {
      this.searchComponent()?.inputEl()?.nativeElement.focus();
    }, 0);
  }
}
