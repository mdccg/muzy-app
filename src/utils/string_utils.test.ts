import { sanitizeSearchedFruitName, verifyIfStringIsEmpty } from './string_utils';

describe('Tests over search field validation', () => {
  it('should remove unwished characters from the string', () => {
    let searchedFruitName: string;
    let sanitizedFruitName: string;

    searchedFruitName = ' apple ';
    sanitizedFruitName = sanitizeSearchedFruitName(searchedFruitName);
    expect(sanitizedFruitName).toBe('apple');

    searchedFruitName = '     apple    1    ℀   ';
    sanitizedFruitName = sanitizeSearchedFruitName(searchedFruitName);
    expect(sanitizedFruitName).toBe('apple');

    searchedFruitName = '     . , ; ~   ';
    sanitizedFruitName = sanitizeSearchedFruitName(searchedFruitName);
    expect(sanitizedFruitName).toBe('');
  });

  it('should return true if the string has any content', () => {
    const isStringEmpty = verifyIfStringIsEmpty('apple');
    expect(isStringEmpty).toBe(false);
  });

  it('should return false if the string is empty', () => {
    let isStringEmpty: boolean;

    isStringEmpty = verifyIfStringIsEmpty('       ');
    expect(isStringEmpty).toBe(true);

    isStringEmpty = verifyIfStringIsEmpty('');
    expect(isStringEmpty).toBe(true);
  });
});

export {};