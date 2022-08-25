import { IPosition } from './../models/interfaces/careers/position.interface';

export const getShortenPositionsList = (locale: string): IPosition[] => {
  const positions = require(`/data/careers/careers.${locale}.json`);

  return positions.map(({ id, title, location }: IPosition) => ({
    id,
    title,
    location,
  }));
};
