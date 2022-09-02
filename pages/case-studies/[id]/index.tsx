import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { BaseLayout } from 'components/layouts/base-layout';
import { ReactElement } from 'react';
import ContactUs from 'components/shared/contact-us/contact-us';
import {
  ICaseStudy,
  ICaseStudyFull,
} from 'models/interfaces/case-strudies/case-studies.interface';
import {
  getCaseStudiesPaths,
  getOtherServices,
  getSingleCaseStudy,
} from 'data-utils/case-studies';
import CaseStudyBanner from 'components/features/case-studies/case-study/case-study-banner';
import CaseStudyMainInfo from 'components/features/case-studies/case-study/case-study-main-info';
import OtherSection from 'components/features/case-studies/case-study/other-section';
import Head from 'next/head';

interface IProps {
  caseStudy: ICaseStudyFull;
  other?: ICaseStudy[];
}

const CaseStudy: NextPage<IProps> = ({ caseStudy, other }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Place the meta description text here."
        />
      </Head>
      <CaseStudyBanner caseStudy={caseStudy} />
      <CaseStudyMainInfo caseStudy={caseStudy} />
      {!!other?.length && <OtherSection other={other} />}
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
      other: getOtherServices(locale, params?.id as string),
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
