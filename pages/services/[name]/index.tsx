import type { NextPage } from 'next';
import { BaseLayout } from '@components/layouts/base-layout';
import { ReactElement } from 'react';
import ContactUs from 'components/shared/contact-us/contact-us';
import {
  getResidualServices,
  getServicesPaths,
  getSingleService,
} from 'data-utils/services';
import {
  IResidualService,
  IServiceFull,
} from 'models/interfaces/services/service.interface';
import OtherServices from 'components/features/services/other-services';
import ServiceBanner from 'components/features/services/service-banner';
import Features from 'components/features/services/features';

interface IServicePage {
  services: IResidualService[];
  service: IServiceFull;
}

const Service: NextPage<IServicePage> = ({ services, service }) => {
  return (
    <>
      <ServiceBanner service={service} />
      <Features service={service} />
      <OtherServices services={services} />
      <ContactUs />
    </>
  );
};

Service.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export function getStaticProps({
  locale,
  params,
}: {
  locale: string;
  params: { name: string };
}) {
  return {
    props: {
      services: getResidualServices(locale, params.name),
      service: getSingleService(locale, params.name),
      messages: {
        ...require(`/locales/${locale}/shared.json`),
        ...require(`/locales/${locale}/pages/services.json`),
      },
    },
  };
}

export const getStaticPaths = () => {
  const services = getServicesPaths();

  const paths = services.map((path: string) => ({ params: { name: path } }));

  return {
    paths,
    fallback: false,
  };
};

export default Service;
