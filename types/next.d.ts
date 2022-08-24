import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  PreviewData,
} from 'next/types';
import { ParsedUrlQuery } from 'querystring';
import { TLocales } from '@types/locales';

declare module 'next' {
  type NextPage<P = {}> = NextComponentType<NextPageContext, any, P> & {
    getLayout?: (page: ReactElement) => ReactNode;
  };

  type GetStaticPaths<P extends ParsedUrlQuery = ParsedUrlQuery> = (
    context: GetStaticPathsContext & {
      locales: TLocales;
      defaultLocale: 'en';
    },
  ) => Promise<GetStaticPathsResult<P>> | GetStaticPathsResult<P>;

  type GetStaticProps<
    P extends { [key: string]: any } = { [key: string]: any },
    Q extends ParsedUrlQuery = ParsedUrlQuery,
    D extends PreviewData = PreviewData,
  > = (
    context: GetStaticPropsContext<Q, D> & { locale: string },
  ) => Promise<GetStaticPropsResult<P>> | GetStaticPropsResult<P>;
}

declare module 'next/app' {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
  };
}
