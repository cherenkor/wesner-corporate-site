import type { NextPage } from 'next';
import { BaseLayout } from '@components/layouts/base-layout';
import { ReactElement } from 'react';
import ContactUs from 'components/shared/contact-us/contact-us';
import AproachSection from 'components/features/home/aproach-section';
import WhyWeSection from 'components/features/home/why-we-section';
import ServicesSection from 'components/features/home/services-section';
import Banner from 'components/features/home/banner';

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <ServicesSection />
      <WhyWeSection />
      <AproachSection />
      <ContactUs />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout isPrimaryHeader>{page}</BaseLayout>;
};

export function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: {
        ...require(`/locales/${locale}/shared.json`),
        ...require(`/locales/${locale}/pages/home.json`),
      },
    },
  };
}

export default Home;
