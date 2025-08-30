import { Component, HostListener, signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-top-button',
  imports: [TranslateModule, MatTooltipModule],
  templateUrl: './top-button.component.html',
  styleUrl: './top-button.styles.scss',
})
export class TopIconButtonComponent {
  offsetTop = signal(0);

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.offsetTop.set(document.documentElement.scrollTop);
  }

  scrollTop() {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
}
