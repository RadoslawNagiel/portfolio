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
    expect(service.projectTypeFilter().length).toBe(0);
    expect(service.languageFilter().length).toBe(0);
    expect(service.frameworkFilter().length).toBe(0);
    expect(service.apiFilter().length).toBe(0);
    expect(service.libraryFilter().length).toBe(0);
    expect(service.utilityFilter().length).toBe(0);
  });

  it(`#filteredProjects should return all projects at startup`, () => {
    expect(service.filteredProjects().length).toBe(PROJECTS.length);
  });

  it(`#selectedFiltersAmount should be 0 at startup`, () => {
    expect(service.selectedFiltersAmount()).toBe(0);
  });

  it(`#filteredProjects should only return projects containing filtered tags`, () => {
    service.frameworkFilter.set([testProjectTypeTag]);
    let projects = structuredClone(PROJECTS).filter((project) =>
      project.tags.find((tag) => tag.name === testProjectTypeTag.name)
    );
    let result = service.filteredProjects();
    expect(result.length).toBe(projects.length);

    service.languageFilter.set([testLanguageTag]);
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
    service.projectTypeFilter.set([testProjectTypeTag]);
    expect(service.selectedFiltersAmount()).toBe(1);

    service.languageFilter.set([testProjectTypeTag, testProjectTypeTag]);
    expect(service.selectedFiltersAmount()).toBe(2);

    service.frameworkFilter.set([testProjectTypeTag]);
    expect(service.selectedFiltersAmount()).toBe(3);

    service.apiFilter.set([
      testProjectTypeTag,
      testProjectTypeTag,
      testProjectTypeTag,
      testProjectTypeTag,
      testProjectTypeTag,
    ]);
    expect(service.selectedFiltersAmount()).toBe(4);

    service.libraryFilter.set([testProjectTypeTag]);
    expect(service.selectedFiltersAmount()).toBe(5);

    service.utilityFilter.set([testProjectTypeTag]);
    expect(service.selectedFiltersAmount()).toBe(6);
  });

  it(`#clearAllFilters should set all filters empty`, () => {
    service.projectTypeFilter.set([testProjectTypeTag]);
    service.languageFilter.set([testProjectTypeTag]);
    service.frameworkFilter.set([testProjectTypeTag]);
    service.apiFilter.set([testProjectTypeTag]);
    service.libraryFilter.set([testProjectTypeTag]);
    service.utilityFilter.set([testProjectTypeTag]);
    expect(service.selectedFiltersAmount()).toBe(6);
    service.clearAllFilters();
    expect(service.selectedFiltersAmount()).toBe(0);
  });
});
