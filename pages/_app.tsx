import type { AppLayoutProps } from 'next/app';
import { ReactQueryProvider } from '@providers/react-query.provider';
import { NextIntlProvider } from '@providers/next-intl.provider';

import '@styles/globals.css';

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const getLayout = Component.getLayout ?? ((page: JSX.Element) => page);

  return (
    <NextIntlProvider pageProps={pageProps}>
      <ReactQueryProvider>
        {getLayout(<Component {...pageProps} />)}
      </ReactQueryProvider>
    </NextIntlProvider>
  );
}

export default MyApp;
