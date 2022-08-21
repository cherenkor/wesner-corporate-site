import Link from 'next/link';
import LogoSmall from 'public/images/logo.svg';
import LogoDefault from 'public/images/logo-full.svg';
import LogoWhite from 'public/images/logo-white.svg';
import { ERoutes } from 'models/enums/routes.enum';

interface ILogoProps {
  isWhite?: boolean;
  isSmall?: boolean;
}

export default function Logo({ isWhite, isSmall }: ILogoProps): JSX.Element {
  if (isWhite) {
    return (
      <Link href={ERoutes.Home}>
        <LogoWhite />
      </Link>
    );
  }
  if (isSmall) {
    return (
      <Link href={ERoutes.Home}>
        <LogoSmall />
      </Link>
    );
  }
  return (
    <Link href={ERoutes.Home}>
      <LogoDefault />
    </Link>
  );
}
