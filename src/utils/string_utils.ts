export const sanitizeSearchedFruitName = (fruitName: string): string => {
  return fruitName.trim().replace(/\W|\d/g, '').replace(/\s+/g, ' ');
}

export const verifyIfStringIsEmpty = (string: string): boolean => {
  return new RegExp(/^(\s+)?$/).test(string);
}