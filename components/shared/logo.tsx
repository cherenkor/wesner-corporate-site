import NextLink from 'next/link';
import LogoSmall from 'public/images/logo.svg';
import LogoDefault from 'public/images/logo-full.svg';
import LogoWhite from 'public/images/logo-white.svg';
import { ERoutes } from 'models/enums/routes.enum';
import { Link } from '@mui/material';

interface ILogoProps {
  isWhite?: boolean;
  isSmall?: boolean;
  onClick?(): void;
}

export default function Logo({
  isWhite,
  isSmall,
  onClick,
}: ILogoProps): JSX.Element {
  if (isWhite) {
    return (
      <NextLink href={ERoutes.Home} passHref>
        <Link onClick={onClick}>
          <LogoWhite />
        </Link>
      </NextLink>
    );
  }
  if (isSmall) {
    return (
      <NextLink href={ERoutes.Home} passHref>
        <Link onClick={onClick}>
          <LogoSmall />
        </Link>
      </NextLink>
    );
  }
  return (
    <NextLink href={ERoutes.Home} passHref>
      <Link onClick={onClick}>
        <LogoDefault />
      </Link>
    </NextLink>
  );
}
