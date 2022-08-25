import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Banner from 'public/careers/banner.png';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';
import NextLink from 'next/link';
import { ERoutes } from 'models/enums/routes.enum';

export default function BannerSection(): JSX.Element {
  const t = useTranslations('careers');

  const getResponsiveFont = useGetResponsiveFontVariants();

  return (
    <Box pt={{ xs: 7, md: 6, lg: 14 }}>
      <Container>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          justifyContent={{ xs: 'flex-start', lg: 'space-between' }}
          alignItems={{ xs: 'flex-start', lg: 'center' }}
          gap={2}
          mb={{ xs: 3, md: 5, lg: 6 }}
        >
          <Stack gap={{ xs: 1, lg: 2 }} maxWidth={{ xs: 1, lg: 672 }}>
            <Typography
              component="h1"
              variant={getResponsiveFont({
                small: 'h3',
                medium: 'h2',
                large: 'h1',
              })}
            >
              {t('title')}
            </Typography>
            <Typography
              color="grey.800"
              variant={getResponsiveFont({
                medium: 'body2',
                large: 'body1',
              })}
            >
              {t('description')}
            </Typography>
          </Stack>
          <NextLink href={ERoutes.ContactUs}>
            <Button>{t('btnText')}</Button>
          </NextLink>
        </Stack>
      </Container>
      <Box position="relative" width={1} sx={{ aspectRatio: '90/29' }}>
        <Image src={Banner} alt="" layout="fill" priority />
      </Box>
    </Box>
  );
}
