import type { AppLayoutProps } from 'next/app';
import { ReactQueryProvider } from '@providers/react-query.provider';
import { NextIntlProvider } from '@providers/next-intl.provider';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from 'theme/theme';
import '@styles/globals.css';

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const getLayout = Component.getLayout ?? ((page: JSX.Element) => page);

  return (
    <NextIntlProvider pageProps={pageProps}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ReactQueryProvider>
        <ThemeProvider theme={theme()}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </ReactQueryProvider>
    </NextIntlProvider>
  );
}

export default MyApp;
