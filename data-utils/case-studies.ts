import { ICaseStudyFull } from './../models/interfaces/case-strudies/case-studies.interface';
import { ICaseStudy } from 'models/interfaces/case-strudies/case-studies.interface';
import { TLocales } from '@types/locales';

export const getCaseStudiesShortInfo = (locale: string): ICaseStudy[] => {
  const caseStudies = require(`/data/case-studies/case-studies.${locale}.json`);

  return caseStudies.map((item: ICaseStudy) => ({
    id: item.id,
    imgUrl: item.imgUrl,
    previewUrl: item.previewUrl,
    categories: item.categories,
    title: item.title,
  }));
};

export const getCaseStudiesUniqueCategories = (locale: string): string[] => {
  const caseStudies = require(`/data/case-studies/case-studies.${locale}.json`);

  const categories = caseStudies.flatMap((item: ICaseStudy) => item.categories);

  return Array.from(new Set(categories));
};

export const getSingleCaseStudy = (locale: string, id: string) => {
  const services = require(`/data/case-studies/case-studies.${locale}.json`);

  return services.filter((item: ICaseStudyFull) => item.id === id)[0];
};

export const getCaseStudiesPaths = (locales: TLocales) => {
  const translates = locales.flatMap((locale) => ({
    locale,
    data: require(`/data/case-studies/case-studies.${locale}.json`) as ICaseStudyFull[],
  }));

  return translates.flatMap(({ data, locale }) =>
    data.map((item) => ({
      params: { id: item.id },
      locale,
    })),
  );
};
