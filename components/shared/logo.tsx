import Link from 'next/link';
import LogoSmall from 'public/images/logo.svg';

export default function Logo(): JSX.Element {
  return (
    <Link href="/">
      <LogoSmall />
    </Link>
  );
}
