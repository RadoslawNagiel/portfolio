import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { getTagInfo } from '../../functions/tags';
import { NgStyle } from '@angular/common';
import { TAG } from '../../data/tags';

@Component({
  selector: 'app-tags',
  imports: [TranslateModule, NgStyle],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export default class TagsComponent {
  readonly getTagInfo = getTagInfo;

  tags = input.required<TAG[]>();
}
