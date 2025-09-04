import { TranslateService } from '@ngx-translate/core';
import { ProjectInfo } from '../data/projects';

export const filterProjectsByText = (text: string, projects: ProjectInfo[], translateService: TranslateService) => {
  if (text.length) {
    return projects.filter((el) => {
      const tagsName = el.tags.filter((tag) => translateService.instant(tag.name).toLowerCase().includes(text.toLowerCase())).map((tag) => tag.name);
      if (tagsName.length) {
        return true;
      }
      if (
        translateService
          .instant('projects.' + el.id + '.name')
          .toLowerCase()
          .includes(text.toLowerCase())
      ) {
        return true;
      }
      if (
        translateService
          .instant('projects.' + el.id + '.description')
          .replace(/<br>/g, ' ')
          .replace(/<[^>]*>/g, '')
          .toLowerCase()
          .includes(text.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
  }
  return projects;
};
