import type { NextPage } from 'next';
import { BaseLayout } from '@components/layouts/base-layout';
import { ReactElement } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import HeaderDecoration from 'components/shared/header-decoration';
import MainContentEn from '@components/features/privacy-policy/main-content-en';
import { useTranslations } from 'next-intl';
import { Typography } from '@mui/material';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

const Terms: NextPage = () => {
  const t = useTranslations('privacyPolicy');
  const getFontVariants = useGetResponsiveFontVariants();

  return (
    <>
      <HeaderDecoration />
      <Container fixed>
        <Stack
          px={{ xs: 3, lg: 27 }}
          pb={{ xs: 6, lg: 10 }}
        >
          <Typography
            component="h1"
            variant={getFontVariants({
              small: 'h4',
              medium: 'h3',
              large: 'h2',
            })}
            mb={{ xs: 1, md: 2, lg: 3 }}
          >
            {t('title')}
          </Typography>
          <Typography component="div" variant="h6" mb={{ xs: 2, md: 3, lg: 4 }}>
            {t('date')}
          </Typography>
          <MainContentEn />
        </Stack>
      </Container>
    </>
  );
};

Terms.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout isPrimaryHeader>{page}</BaseLayout>;
};

export function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: {
        ...require(`/locales/${locale}/shared.json`),
      },
    },
  };
}

export default Terms;
