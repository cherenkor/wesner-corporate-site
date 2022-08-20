import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

declare module 'next' {
  type NextPage<P = {}> = NextComponentType<NextPageContext, any, P> & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}

declare module 'next/app' {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
  };
}
