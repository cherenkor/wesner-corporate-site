import type { NextPage } from 'next';
import { BaseLayout } from '@components/layouts/base-layout';
import { ReactElement } from 'react';
import CaseStudiesHeader from 'components/features/case-studies/case-studies-header';
import {
  getCaseStudiesShortInfo,
  getCaseStudiesUniqueCategories,
} from 'data-utils/case-studies';
import { ICaseStudy } from 'models/interfaces/case-strudies/case-studies.interface';
import CaseStudiesList from '@components/features/case-studies/case-studies-list';

interface ICaseStudies {
  caseStudies: ICaseStudy[];
  categories?: string[];
}

const CaseStudies: NextPage<ICaseStudies> = ({ caseStudies, categories }) => {
  return (
    <>
      <CaseStudiesHeader />
      {!!caseStudies.length && (
        <CaseStudiesList caseStudies={caseStudies} categories={categories} />
      )}
    </>
  );
};

CaseStudies.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      categories: getCaseStudiesUniqueCategories(locale),
      caseStudies: getCaseStudiesShortInfo(locale),
      messages: {
        ...require(`/locales/${locale}/shared.json`),
        ...require(`/locales/${locale}/pages/case-studies.json`),
      },
    },
  };
}

export default CaseStudies;
