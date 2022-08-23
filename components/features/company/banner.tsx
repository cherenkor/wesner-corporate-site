import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '@mui/material/Container';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import BannerImg from 'public/images/company/banner.png';
import BannerImgXs from 'public/images/company/bannerxs.png';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

export default function Banner() {
  const t = useTranslations('company.banner');
  const getResponsiveFont = useGetResponsiveFontVariants();
  const bodyFont = getResponsiveFont({ medium: 'body2', large: 'body1' });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <Container sx={{ mt: { xs: 6, lg: 14 }, position: 'relative' }}>
        <Stack
          maxWidth={{ xs: 1, lg: 576 }}
          gap={{ xs: 1, lg: 2 }}
          position={{ xs: 'relative', lg: 'absolute' }}
          zIndex={1}
        >
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
          <Typography variant={bodyFont} color="grey.800">
            {t('description1')}
          </Typography>
          <Typography variant={bodyFont} color="grey.800">
            {t('description2')}
          </Typography>
        </Stack>
      </Container>
      <Box
        ml={{ lg: 'calc((100vw - 1200px) / 2 + 36px)' }}
        mt={{ xs: 5, md: 0 }}
      >
        <Image src={isMobile ? BannerImgXs : BannerImg} alt="" />
      </Box>
    </Box>
  );
}
