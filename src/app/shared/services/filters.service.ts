import { computed, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PROJECTS } from '../data/projects';
import { Tag, TagType } from '../data/tags';
import { filterProjectsByTag } from '../functions/filter-projectsts-by-tag';
import { filterProjectsByText } from '../functions/filter-projectsts-by-text';
import { returnOneIfNotEmpty } from '../functions/return-one-if-not-empty';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  readonly searchService = inject(SearchService);
  readonly translateService = inject(TranslateService);

  filters = {
    projectTypeFilter: {
      label: `filters.projectType`,
      type: TagType.projectType,
      selected: signal<Tag[]>([]),
    },
    languageFilter: {
      label: `filters.language`,
      type: TagType.language,
      selected: signal<Tag[]>([]),
    },
    frameworkFilter: {
      label: `filters.framework`,
      type: TagType.framework,
      selected: signal<Tag[]>([]),
    },
    apiFilter: {
      label: `filters.api`,
      type: TagType.api,
      selected: signal<Tag[]>([]),
    },
    libraryFilter: {
      label: `filters.library`,
      type: TagType.library,
      selected: signal<Tag[]>([]),
    },
    utilityFilter: {
      label: `filters.utility`,
      type: TagType.utility,
      selected: signal<Tag[]>([]),
    },
    testsFilter: {
      label: `filters.tests`,
      type: TagType.tests,
      selected: signal<Tag[]>([]),
    },
  };

  filteredProjects = computed(() => {
    let projects = structuredClone(PROJECTS);
    projects = filterProjectsByText(this.searchService.searchValue(), projects, this.translateService);
    this.getFilters().forEach((value) => {
      projects = filterProjectsByTag(value.selected(), projects);
    });
    return projects;
  });

  selectedFiltersAmount = computed(() => {
    let amount = 0;
    this.getFilters().forEach((value) => {
      amount += returnOneIfNotEmpty(value.selected());
    });
    return amount;
  });

  clearAllFilters() {
    this.getFilters().forEach((value) => {
      value.selected.set([]);
    });
  }

  getFilters() {
    return Object.entries(this.filters).map(([, value]) => value);
  }
}
