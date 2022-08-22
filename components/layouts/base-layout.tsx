import Navigation from 'components/shared/navigation/navigation';
import { LocaleSwitcher } from '@components/ui/ui-locale-switcher';
import Box from '@mui/material/Box';
import { PropsWithChildren } from 'react';
import Footer from './footer';

interface IBaseLayoutProps extends PropsWithChildren {
  isPrimaryHeader?: boolean;
}

export const BaseLayout = ({ children, isPrimaryHeader }: IBaseLayoutProps) => {
  return (
    <>
      <Navigation isPrimary={isPrimaryHeader} />
      <Box bgcolor="background.paper">{children}</Box>
      <Footer />
    </>
  );
};
