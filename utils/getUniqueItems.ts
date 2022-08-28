import { getRandomNumber } from './randomNumber';

export function getUniqeItems<T>(
  arr: T[],
  count: number,
  result: T[] = [],
): T[] {
  if (count === 0) return result;

  const random = getRandomNumber(0, arr.length - 1);
  const filteredArr = arr.filter((_, index) => index !== random);

  return getUniqeItems(filteredArr, count - 1, [...result, arr[random]]);
}
