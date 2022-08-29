import type { NextPage } from 'next';
import { BaseLayout } from '@components/layouts/base-layout';
import { ReactElement } from 'react';
import { ITerms } from 'models/interfaces/terms/terms.interface';
import { getTermsContent } from 'data-utils/terms';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import HeaderDecoration from 'components/shared/header-decoration';
import TermsHeader from '@components/features/terms/terms-header';
import TermsContent from '@components/features/terms/terms-content';

interface ITermsPage {
  content: ITerms;
}

const Terms: NextPage<ITermsPage> = ({ content }) => {
  return (
    <>
      <HeaderDecoration />
      <Container fixed>
        <Stack
          px={{ xs: 3, lg: 27 }}
          gap={{ xs: 2, md: 3, lg: 6 }}
          pb={{ xs: 6, lg: 10 }}
        >
          <TermsHeader header={content} />
          <TermsContent content={content.content || []} />
        </Stack>
      </Container>
    </>
  );
};

Terms.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout isPrimaryHeader>{page}</BaseLayout>;
};

export function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      content: getTermsContent(locale),
      messages: {
        ...require(`/locales/${locale}/shared.json`),
      },
    },
  };
}

export default Terms;
