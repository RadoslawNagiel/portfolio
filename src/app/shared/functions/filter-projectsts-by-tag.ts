import { ProjectInfo } from '../data/projects';
import { Tag } from '../data/tags';

export const filterProjectsByTag = (filterTags: Tag[], projects: ProjectInfo[]) => {
  if (filterTags.length) {
    return projects.filter((el) => {
      const tagsName = el.tags.filter((tag) => tag.type === filterTags[0].type).map((tag) => tag.name);
      if (filterTags.find((filter) => tagsName.includes(filter.name))) {
        return true;
      }
      return false;
    });
  }
  return projects;
};
