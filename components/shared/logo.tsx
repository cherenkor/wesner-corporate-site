import NextLink from 'next/link';
import LogoSmall from 'public/images/logo.svg';
import LogoDefault from 'public/images/logo-full.svg';
import LogoWhite from 'public/images/logo-white.svg';
import { ERoutes } from 'models/enums/routes.enum';
import { Link } from '@mui/material';

interface ILogoProps {
  isWhite?: boolean;
  isSmall?: boolean;
}

export default function Logo({ isWhite, isSmall }: ILogoProps): JSX.Element {
  if (isWhite) {
    return (
      <NextLink href={ERoutes.Home} passHref>
        <Link>
          <LogoWhite />
        </Link>
      </NextLink>
    );
  }
  if (isSmall) {
    return (
      <NextLink href={ERoutes.Home} passHref>
        <Link>
          <LogoSmall />
        </Link>
      </NextLink>
    );
  }
  return (
    <NextLink href={ERoutes.Home} passHref>
      <Link>
        <LogoDefault />
      </Link>
    </NextLink>
  );
}
