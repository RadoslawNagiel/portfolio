import { Component, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IconButtonComponent } from './shared/dumb-components/icon-button/icon-button.component';
import { MenuItemsComponent } from './shared/smart-components/menu-items/menu-items.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TranslateModule,
    MatSidenavModule,
    IconButtonComponent,
    MenuItemsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuOpened = signal(false);

  toggleMenu() {
    this.menuOpened.set(!this.menuOpened());
    const body = document.getElementById(`body-element`);
    if (body) {
      body.style.overflow = this.menuOpened() ? `hidden` : `auto`;
    }
  }
}
