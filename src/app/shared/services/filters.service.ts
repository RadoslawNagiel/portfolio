import { computed, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PROJECTS } from '../data/projects';
import { Tag } from '../data/tags';
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

  projectTypeFilter = signal<Tag[]>([]);
  languageFilter = signal<Tag[]>([]);
  frameworkFilter = signal<Tag[]>([]);
  apiFilter = signal<Tag[]>([]);
  libraryFilter = signal<Tag[]>([]);
  utilityFilter = signal<Tag[]>([]);

  filteredProjects = computed(() => {
    let projects = structuredClone(PROJECTS);
    projects = filterProjectsByText(
      this.searchService.searchValue(),
      projects,
      this.translateService
    );
    projects = filterProjectsByTag(this.projectTypeFilter(), projects);
    projects = filterProjectsByTag(this.languageFilter(), projects);
    projects = filterProjectsByTag(this.frameworkFilter(), projects);
    projects = filterProjectsByTag(this.apiFilter(), projects);
    projects = filterProjectsByTag(this.libraryFilter(), projects);
    projects = filterProjectsByTag(this.utilityFilter(), projects);
    return projects;
  });

  selectedFiltersAmount = computed(() => {
    return (
      returnOneIfNotEmpty(this.projectTypeFilter()) +
      returnOneIfNotEmpty(this.languageFilter()) +
      returnOneIfNotEmpty(this.frameworkFilter()) +
      returnOneIfNotEmpty(this.apiFilter()) +
      returnOneIfNotEmpty(this.libraryFilter()) +
      returnOneIfNotEmpty(this.utilityFilter())
    );
  });

  clearAllFilters() {
    this.projectTypeFilter.set([]);
    this.languageFilter.set([]);
    this.frameworkFilter.set([]);
    this.apiFilter.set([]);
    this.libraryFilter.set([]);
    this.utilityFilter.set([]);
  }
}
