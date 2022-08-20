import { NextIntlProvider as NextIntl, IntlErrorCode } from 'next-intl';

function onError(error: any) {
  console.error(IntlErrorCode.MISSING_MESSAGE, error);
}

function getMessageFallback({
  namespace,
  key,
  error,
}: {
  namespace?: string;
  key: string;
  error: IntlError;
}) {
  const path = [namespace, key].filter((part) => part != null).join('.');

  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return `${path} is not yet translated`;
  } else {
    return `Dear developer, please fix this message: ${path}`;
  }
}

import { PropsWithChildren } from 'react';
import { AppInitialProps } from 'next/dist/shared/lib/utils';
import IntlError from 'use-intl/src/IntlError';

export const NextIntlProvider = ({
  children,
  pageProps,
}: PropsWithChildren<AppInitialProps>) => {
  return (
    <NextIntl
      messages={pageProps.messages}
      onError={onError}
      getMessageFallback={getMessageFallback}
    >
      {children}
    </NextIntl>
  );
};
