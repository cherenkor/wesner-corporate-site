import { Container, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

export default function CaseStudiesHeader(): JSX.Element {
  const t = useTranslations('caseStudies');
  const getResponsiveFonts = useGetResponsiveFontVariants();

  return (
    <Container sx={{ pt: { xs: 6, lg: 12 }, pb: { xs: 2, lg: 6 } }}>
      <Stack gap={{ xs: 1, lg: 2 }} maxWidth={{ xs: 1, lg: 672 }}>
        <Typography
          component="h1"
          variant={getResponsiveFonts({
            small: 'h3',
            medium: 'h2',
            large: 'h1',
          })}
        >
          {t('title')}
        </Typography>
        <Typography
          variant={getResponsiveFonts({ medium: 'body2', large: 'body1' })}
          color="grey.800"
        >
          {t('description')}
        </Typography>
      </Stack>
    </Container>
  );
}
