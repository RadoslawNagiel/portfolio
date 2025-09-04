import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PROJECTS } from '../data/projects';
import { Tag, TAGS } from '../data/tags';
import { FiltersService } from './filters.service';
import { SearchService } from './search.service';

describe(`FiltersService`, () => {
  let service: FiltersService;

  const testProjectTypeTag: Tag = structuredClone(TAGS[`private`]);
  const testLanguageTag: Tag = structuredClone(TAGS[`typescript`]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [FiltersService, SearchService],
    });

    service = TestBed.inject(FiltersService);
  });

  it(`should be created`, () => {
    expect(service).toBeTruthy();
  });

  it(`all filters should be empty at startup`, () => {
    Object.entries(service.filters).forEach(([, filter]) => {
      expect(filter.selected().length).toBe(0);
    });
  });

  it(`#filteredProjects should return all projects at startup`, () => {
    expect(service.filteredProjects().length).toBe(PROJECTS.length);
  });

  it(`#selectedFiltersAmount should be 0 at startup`, () => {
    expect(service.selectedFiltersAmount()).toBe(0);
  });

  it(`#filteredProjects should only return projects containing filtered tags`, () => {
    service.filters.frameworkFilter.selected.set([testProjectTypeTag]);
    let projects = structuredClone(PROJECTS).filter((project) =>
      project.tags.find((tag) => tag.name === testProjectTypeTag.name)
    );
    let result = service.filteredProjects();
    expect(result.length).toBe(projects.length);

    service.filters.languageFilter.selected.set([testLanguageTag]);
    projects = projects.filter((project) =>
      project.tags.find((tag) => tag.name === testLanguageTag.name)
    );
    result = service.filteredProjects();
    expect(result.length).toBe(projects.length);
  });

  it(`#filteredProjects should only return projects containing filtered text in their name, description or tags`, fakeAsync(() => {
    service.searchService.searchValue.set(`Winery`);
    tick(300);
    expect(service.filteredProjects().length).toBe(2);

    service.searchService.searchValue.set(`projects.sftk.description`);
    tick(300);
    expect(service.filteredProjects().length).toBe(1);

    service.searchService.searchValue.set(`c++ builder`);
    tick(300);
    expect(service.filteredProjects().length).toBe(2);
  }));

  it(`#selectedFiltersAmount should be return the number of filters if the filters have changed`, () => {
    Object.entries(service.filters).forEach(([, filter], index) => {
      filter.selected.set([testProjectTypeTag, testLanguageTag]);
      expect(service.selectedFiltersAmount()).toBe(index + 1);
    });
  });

  it(`#clearAllFilters should set all filters empty`, () => {
    Object.entries(service.filters).forEach(([, filter]) => {
      filter.selected.set([testProjectTypeTag]);
    });
    expect(service.selectedFiltersAmount()).toBe(
      Object.keys(service.filters).length
    );
    service.clearAllFilters();
    expect(service.selectedFiltersAmount()).toBe(0);
  });
});
