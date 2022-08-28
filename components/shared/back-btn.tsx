import { ArrowLeftIcon } from 'components/shared/icons';
import { Link } from '@mui/material';
import { ERoutes } from 'models/enums/routes.enum';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';

interface IProps {
  path: string;
  text: string;
}

export default function BackBtn({ path, text }: IProps): JSX.Element {
  return (
    <NextLink href={path} passHref>
      <Link
        display="flex"
        alignItems="center"
        gap={1}
        underline="none"
        color="grey.900"
        variant="h6"
        textTransform="uppercase"
      >
        <ArrowLeftIcon /> {text}
      </Link>
    </NextLink>
  );
}
