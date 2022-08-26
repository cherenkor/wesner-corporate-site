import { Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

export default function Title(): JSX.Element {
  const t = useTranslations('contactUsPage');
  const getResponsiveFonts = useGetResponsiveFontVariants();

  return (
    <Stack gap={{ xs: 1, lg: 2 }}>
      <Typography
        component="h1"
        variant={getResponsiveFonts({ small: 'h3', medium: 'h2', large: 'h1' })}
      >
        {t('title')}
      </Typography>
      <Typography
        variant={getResponsiveFonts({ medium: 'body2', large: 'body1' })}
        color="grey.800"
        maxWidth={{ xs: 1, lg: 504 }}
      >
        {t('description')}
      </Typography>
    </Stack>
  );
}
