import { TAG, TAGS } from '../data/tags';

export const getTagInfo = (value: TAG) => {
  return TAGS[value];
};
