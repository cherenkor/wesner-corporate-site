import type { NextPage } from 'next';
import { useTranslations } from 'use-intl';
import { BaseLayout } from '@components/layouts/base-layout';
import { ReactElement } from 'react';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {
  const t = useTranslations();

  return (
    <div>
      <Typography variant="h1"> Test multi languages feature</Typography>
      <div>Greetings: {t('greetings')}</div>
      <div>Title: {t('app-title')}</div>
      <div>Page title: {t('page-title')}</div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: {
        ...require(`/locales/${locale}/shared.json`),
        ...require(`/locales/${locale}/pages/home.json`),
      },
    },
  };
}

export default Home;
