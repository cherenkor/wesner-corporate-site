import type { NextPage } from 'next';
import { BaseLayout } from '@components/layouts/base-layout';
import { ReactElement } from 'react';
import ContactUs from 'components/shared/contact-us/contact-us';
import BannerSection from 'components/features/careers/banner-section';
import Benefits from '@components/features/careers/benefits';

const Careers: NextPage = () => {
  return (
    <>
      <BannerSection />
      <Benefits />
      <ContactUs />
    </>
  );
};

Careers.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: {
        ...require(`/locales/${locale}/shared.json`),
        ...require(`/locales/${locale}/pages/careers.json`),
      },
    },
  };
}

export default Careers;
