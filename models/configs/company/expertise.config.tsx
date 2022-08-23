import { useTranslations } from 'next-intl';
import BizTalk from 'public/images/company/bizTalk.png';
import DotNet from 'public/images/company/dotNet.png';
import Azure from 'public/images/company/azure.png';

export const useGetExpertiseConfig = () => {
  const t = useTranslations('company.expertises');

  return [
    {
      name: t('bizTalk'),
      img: BizTalk,
    },
    {
      name: t('dotNet'),
      img: DotNet,
    },
    {
      name: t('azure'),
      img: Azure,
    },
  ];
};
