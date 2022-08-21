import { useTranslations } from 'use-intl';
export const useGetAproachesConfig = () => {
  const t = useTranslations();
  return [
    {
      title: t('aproaches.research.title'),
      number: t('aproaches.research.number'),
      description: t('aproaches.research.description'),
    },
    {
      title: t('aproaches.solution.title'),
      number: t('aproaches.solution.number'),
      description: t('aproaches.solution.description'),
    },
    {
      title: t('aproaches.implementation.title'),
      number: t('aproaches.implementation.number'),
      description: t('aproaches.implementation.description'),
    },
  ];
};
