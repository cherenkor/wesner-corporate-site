import type { NextPage } from 'next';
import { BaseLayout } from '@components/layouts/base-layout';
import { ReactElement } from 'react';
import ContactUs from 'components/shared/contact-us/contact-us';
import ExpertiseSection from 'components/features/company/expertise-section';
import Banner from 'components/features/company/banner';
import Owner from 'components/features/company/owner';
import Roadmap from 'components/features/company/roadmap';
import Team, { ITeamMember } from 'components/features/company/team';
import { server } from 'models/configs';

interface ICompanyPage {
    team: ITeamMember[];
}

const Company: NextPage<ICompanyPage> = ({ team }) => {
  return (
    <>
      <Banner />
      <ExpertiseSection />
      <Owner />
      <Roadmap />
      <Team team={team} />
      <ContactUs />
    </>
  );
};

Company.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const res = await fetch(`${server}/api/company`);
  const team = await res.json();

  return {
    props: {
      team,
      messages: {
        ...require(`/locales/${locale}/shared.json`),
        ...require(`/locales/${locale}/pages/company.json`),
      },
    },
  };
};

export default Company;
