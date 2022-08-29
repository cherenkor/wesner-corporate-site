import { ITerms } from 'models/interfaces/terms/terms.interface';

export const getTermsContent = (locale: string): ITerms => {
  const terms = require(`/data/terms/terms.${locale}.json`);

  return {
    title: terms.title,
    lastUpdated: terms.lastUpdated,
    description: terms.description,
    content: terms.content,
  };
};
