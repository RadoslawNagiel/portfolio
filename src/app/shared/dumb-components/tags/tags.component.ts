import { Component, computed, input, model } from '@angular/core';
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
  selectable = input(false);

  selectedTags = model<Tag[]>([]);

  filteredTags = computed(() => {
    return this.tags().filter((el) => this.tagsTypes().includes(el.type));
  });

  extraTags = computed(() => {
    return this.tags().filter((el) => this.tagsTypes().includes(el.type));
  });

  isSelected(name: string) {
    return this.selectedTags().find((el) => el.name === name);
  }

  tagClicked(tag: Tag) {
    if (!this.selectable()) {
      return;
    }
    const selectedTags = structuredClone(this.selectedTags());
    const index = selectedTags.findIndex((el) => el.name === tag.name);
    if (index === -1) {
      selectedTags.push(tag);
    } else {
      selectedTags.splice(index, 1);
    }
    this.selectedTags.set(selectedTags);
  }
}
