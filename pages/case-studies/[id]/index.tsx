import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { BaseLayout } from 'components/layouts/base-layout';
import { ReactElement } from 'react';
import ContactUs from 'components/shared/contact-us/contact-us';
import { ICaseStudyFull } from 'models/interfaces/case-strudies/case-studies.interface';
import { getCaseStudiesPaths, getSingleCaseStudy } from 'data-utils/case-studies';
import CaseStudyBanner from 'components/features/case-studies/case-study/case-study-banner';
import CaseStudyMainInfo from 'components/features/case-studies/case-study/case-study-main-info';

interface IProps {
  caseStudy: ICaseStudyFull;
}

const CaseStudy: NextPage<IProps> = ({ caseStudy }) => {

  return (
    <>
      <CaseStudyBanner caseStudy={caseStudy} />
      <CaseStudyMainInfo caseStudy={caseStudy}/>
      <ContactUs />
    </>
  );
};

CaseStudy.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export const getStaticProps: GetStaticProps = ({ locale, params }) => {
  return {
    props: {
      caseStudy: getSingleCaseStudy(locale, params?.id as string),
      messages: {
        ...require(`/locales/${locale}/shared.json`),
        ...require(`/locales/${locale}/pages/case-studies.json`),
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = ({ locales }) => {
  return {
    paths: getCaseStudiesPaths(locales),
    fallback: false,
  };
};

export default CaseStudy;
