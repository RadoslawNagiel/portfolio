import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { getTagInfo } from '../../functions/tags';
import { NgClass, NgStyle } from '@angular/common';
import { TAG } from '../../data/tags';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-tags',
  imports: [TranslateModule, NgStyle, MatTooltipModule, NgClass],
  templateUrl: './tags.component.html',
  styleUrl: './tags.styles.scss',
})
export default class TagsComponent {
  readonly getTagInfo = getTagInfo;

  tags = input.required<TAG[]>();
}
