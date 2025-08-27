export const returnOneIfNotEmpty = <T>(tags: T[]) => {
  return tags.length ? 1 : 0;
};
