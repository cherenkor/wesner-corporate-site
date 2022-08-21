import { LocaleSwitcher } from '@components/ui/ui-locale-switcher';
import Box from '@mui/material/Box';
import { PropsWithChildren } from 'react';
import Footer from './footer';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div>
        <LocaleSwitcher />
      </div>
      <Box bgcolor="background.paper">{children}</Box>
      <Footer />
    </div>
  );
};
