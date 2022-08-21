import { useTranslations } from 'next-intl';
import Enterprise from 'public/services/enterprise.png';
import Support from 'public/services/support.png';
import Development from 'public/services/development.png';

export const useGetServicesConfig = () => {
  const t = useTranslations('services');
  return [
    {
      title: t('enterprise.title'),
      description: t('enterprise.description'),
      img: Enterprise,
    },
    {
      title: t('development.title'),
      description: t('development.description'),
      img: Development,
    },
    {
      title: t('support.title'),
      description: t('support.description'),
      img: Support,
    },
  ];
};
