import { Component, computed, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass, NgStyle } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Tag, TagType } from '../../data/tags';

@Component({
  selector: 'app-tags',
  imports: [TranslateModule, NgStyle, MatTooltipModule, NgClass],
  templateUrl: './tags.component.html',
  styleUrl: './tags.styles.scss',
})
export default class TagsComponent {
  tags = input.required<Tag[]>();
  tagsTypes = input.required<TagType[]>();
  extraTagsAmount = input<number>();

  filteredTags = computed(() => {
    return this.tags().filter((el) => this.tagsTypes().includes(el.type));
  });

  extraTags = computed(() => {
    return this.tags().filter((el) => this.tagsTypes().includes(el.type));
  });
}
