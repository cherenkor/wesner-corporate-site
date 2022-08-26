import { TLocales } from '../types/locales';
import {
  IPosition,
  IPositionFull,
} from './../models/interfaces/careers/position.interface';

export const getShortenPositionsList = (locale: string): IPosition[] => {
  const positions = require(`/data/careers/careers.${locale}.json`);

  return positions.map(({ id, title, location }: IPosition) => ({
    id,
    title,
    location,
  }));
};

export const getSinglePosition = (locale: string, id: string) => {
  const services = require(`/data/careers/careers.${locale}.json`);

  return services.filter((item: IPositionFull) => item.id === id)[0];
};

export const getCareersPaths = (locales: TLocales) => {
  const translates = locales.flatMap((locale) => ({
    locale,
    data: require(`/data/careers/careers.${locale}.json`) as IPositionFull[],
  }));

  return translates.flatMap(({ data, locale }) =>
    data.map((item) => ({
      params: { id: item.id },
      locale,
    })),
  );
};
