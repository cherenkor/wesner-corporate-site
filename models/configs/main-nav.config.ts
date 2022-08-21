import { useTranslations } from 'use-intl';
import { ERoutes } from './../enums/routes.enum';

export const useGetMainNavConfig = () => {
  const t = useTranslations();
  return [
    {
      name: t('navigation.services'),
      path: ERoutes.Services,
    },
    {
      name: t('navigation.caseStudies'),
      path: ERoutes.CaseStudies,
    },
    {
      name: t('navigation.company'),
      path: ERoutes.Company,
    },
    {
      name: t('navigation.careers'),
      path: ERoutes.Careers,
    },
  ];
};
