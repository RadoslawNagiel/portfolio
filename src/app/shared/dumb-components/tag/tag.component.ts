import { NgClass, NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { Tag } from '../../data/tags';
import { TooltipValuePipe } from '../../pipes/tooltip-value.pipe';

@Component({
  selector: 'app-tag',
  imports: [
    TranslateModule,
    NgStyle,
    NgClass,
    MatTooltipModule,
    TooltipValuePipe,
  ],
  templateUrl: './tag.component.html',
  styleUrl: './tag.styles.scss',
})
export default class TagComponent {
  tag = input.required<Tag>();
  selectable = input(false);
  isNotSelected = input(false);

  clicked = output();
}
