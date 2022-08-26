import { Link, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

export default function Additional(): JSX.Element {
  const getFontVariants = useGetResponsiveFontVariants();
  const t = useTranslations('careers');

  return (
    <Typography
      variant={getFontVariants({ medium: 'body2', large: 'body1' })}
      color="grey.800"
    >
      {t('helperText')}{' '}
      <Link
        href="mailto:alexander.wesner@wesner-software.de"
        target="_blank"
        color="primary.main"
        underline="hover"
      >
        alexander.wesner@wesner-software.de
      </Link>
    </Typography>
  );
}
