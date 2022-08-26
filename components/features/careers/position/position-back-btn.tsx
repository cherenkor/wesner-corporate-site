import { ArrowLeftIcon } from 'components/shared/icons';
import { Link } from '@mui/material';
import { ERoutes } from 'models/enums/routes.enum';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';

export default function PositionBackBtn(): JSX.Element {
  const t = useTranslations('careers');

  return (
    <NextLink href={ERoutes.Careers} passHref>
      <Link
        display="flex"
        alignItems="center"
        gap={1}
        underline="none"
        color="grey.900"
        variant="h6"
        textTransform="uppercase"
      >
        <ArrowLeftIcon /> {t('backBtnText')}
      </Link>
    </NextLink>
  );
}
