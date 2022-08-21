import { useTranslations } from 'use-intl';
export const useGetWhyWeConfig = () => {
    const t = useTranslations('whywe');
    return [
        {
            count: '+10',
            title: t('years'),
        },
        {
            count: '+25',
            title: t('clients'),
        },
        {
            count: '+150',
            title: t('projects'),
        }
    ]
}