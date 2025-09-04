import { NgStyle } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { IconButtonComponent } from '../../dumb-components/icon-button/icon-button.component';
import { ToggleLanguageComponent } from '../../dumb-components/toggle-language/toggle-language.component';
import { FiltersService } from '../../services/filters.service';
import { ThemeService } from '../../services/theme.service';
import { FiltersModalComponent } from '../filters-modal/filters-modal.component';

@Component({
  selector: 'app-menu-items',
  imports: [TranslateModule, IconButtonComponent, ToggleLanguageComponent, MatBadgeModule, NgStyle],
  templateUrl: './menu-items.component.html',
  styleUrl: `./menu-items.styles.scss`,
})
export class MenuItemsComponent {
  readonly themeService = inject(ThemeService);
  readonly filtersService = inject(FiltersService);
  readonly dialog = inject(MatDialog);

  direction = input.required<`column` | `column-reverse` | `row` | `row-reverse`>();
  showLabels = input(false);
  showSearch = input(false);

  searchOpened = output();

  toggleTheme() {
    this.themeService.setMode(!this.themeService.isDarkThemeSelected());
  }

  openFilters() {
    this.dialog.open(FiltersModalComponent);
  }

  openSearch() {
    this.searchOpened.emit();
  }
}
