import { ICaseStudy } from 'models/interfaces/case-strudies/case-studies.interface';

export const getCaseStudiesShortInfo = (locale: string): ICaseStudy[] => {
  const caseStudies = require(`/data/case-studies/case-studies.${locale}.json`);

  return caseStudies.map((item: ICaseStudy) => ({
    id: item.id,
    imgUrl: item.imgUrl,
    categories: item.categories,
    title: item.title,
  }));
};

export const getCaseStudiesUniqueCategories = (locale: string): string[] => {
  const caseStudies = require(`/data/case-studies/case-studies.${locale}.json`);

  const categories = caseStudies.flatMap((item: ICaseStudy) => item.categories);

  return Array.from(new Set(categories));
};
