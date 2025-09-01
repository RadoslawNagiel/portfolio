import { NgStyle } from '@angular/common';
import { Component, computed, HostListener, signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { isTouchScreen } from '../../functions/is-touch-screen';

@Component({
  selector: 'app-top-button',
  imports: [TranslateModule, MatTooltipModule, NgStyle],
  templateUrl: './top-button.component.html',
  styleUrl: './top-button.styles.scss',
})
export class TopIconButtonComponent {
  readonly isTouchScreen = isTouchScreen();

  offsetTop = signal(0);

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.offsetTop.set(document.documentElement.scrollTop);
  }

  isButtonVisible = computed(() => {
    return this.offsetTop() >= 500;
  });

  scrollTop() {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
}
