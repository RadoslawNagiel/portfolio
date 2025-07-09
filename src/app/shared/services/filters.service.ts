import { computed, Injectable, signal } from '@angular/core';
import { ProjectInfo, PROJECTS } from '../data/projects';
import { Tag } from '../data/tags';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  projectTypeFilter = signal<Tag[]>([]);
  languageFilter = signal<Tag[]>([]);
  frameworkFilter = signal<Tag[]>([]);
  apiFilter = signal<Tag[]>([]);
  libraryFilter = signal<Tag[]>([]);
  utilityFilter = signal<Tag[]>([]);

  filteredProjects = computed(() => {
    let projects = structuredClone(PROJECTS);
    projects = this.filterProjectsByTag(this.projectTypeFilter(), projects);
    projects = this.filterProjectsByTag(this.languageFilter(), projects);
    projects = this.filterProjectsByTag(this.frameworkFilter(), projects);
    projects = this.filterProjectsByTag(this.apiFilter(), projects);
    projects = this.filterProjectsByTag(this.libraryFilter(), projects);
    projects = this.filterProjectsByTag(this.utilityFilter(), projects);
    return projects;
  });

  selectedFiltersAmount = computed(() => {
    return (
      this.getOneIfNotEmpty(this.projectTypeFilter()) +
      this.getOneIfNotEmpty(this.languageFilter()) +
      this.getOneIfNotEmpty(this.frameworkFilter()) +
      this.getOneIfNotEmpty(this.apiFilter()) +
      this.getOneIfNotEmpty(this.libraryFilter()) +
      this.getOneIfNotEmpty(this.utilityFilter())
    );
  });

  filterProjectsByTag(filterTags: Tag[], projects: ProjectInfo[]) {
    if (filterTags.length) {
      return projects.filter((el) => {
        const tagsName = el.tags
          .filter((tag) => tag.type === filterTags[0].type)
          .map((tag) => tag.name);
        if (filterTags.find((filter) => tagsName.includes(filter.name))) {
          return true;
        }
        return false;
      });
    }
    return projects;
  }

  getOneIfNotEmpty(tags: Tag[]) {
    return tags.length ? 1 : 0;
  }
}
