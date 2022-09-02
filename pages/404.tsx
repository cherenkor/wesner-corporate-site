import { BaseLayout } from '@components/layouts/base-layout';
import { Button, Container, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useTranslations } from 'next-intl';
import type { NextPage } from 'next';
import { ReactElement } from 'react';
import Image from 'next/image';
import Decoration from 'public/images/404.png';
import Box from '@mui/system/Box';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';
import Link from 'next/link';
import { ERoutes } from 'models/enums/routes.enum';
import Head from 'next/head';

const Custom404: NextPage = () => {
  const t = useTranslations('404');
  const getFontVariants = useGetResponsiveFontVariants();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Place the meta description text here."
        />
      </Head>
      <Container
        fixed
        sx={{ pt: { xs: 6, lg: 8 }, pb: { xs: 6, md: 8, lg: 15 } }}
      >
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          justifyContent={{ xs: 'flex-start', lg: 'space-between' }}
          gap={{ xs: 5, md: 6, lg: 9 }}
        >
          <Stack alignItems="flex-start" mt={{ lg: 6 }}>
            <Typography
              component="h1"
              variant={getFontVariants({
                small: 'h3',
                medium: 'h2',
                large: 'h1',
              })}
              mb={{ xs: 1, lg: 2 }}
            >
              {t('title')}
            </Typography>
            <Typography
              color="grey.800"
              variant={getFontVariants({
                medium: 'body2',
                large: 'body1',
              })}
              mb={{ xs: 2, lg: 3 }}
            >
              {t('description')}
            </Typography>
            <Link href={ERoutes.Home}>
              <Button>{t('action')}</Button>
            </Link>
          </Stack>
          <Box maxWidth={696}>
            <Image src={Decoration} alt="" />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

Custom404.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: {
        ...require(`/locales/${locale}/shared.json`),
        ...require(`/locales/${locale}/pages/404.json`),
      },
    },
  };
}

export default Custom404;
