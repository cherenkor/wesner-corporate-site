import type { NextPage } from 'next';
import { BaseLayout } from '@components/layouts/base-layout';
import { ReactElement } from 'react';
import ContactUs from 'components/shared/contact-us/contact-us';
import {
  getResidualServices,
  getServesesPaths,
} from 'data-utils/services';
import { IResidualService } from 'models/interfaces/services/service.interface';
import OtherServices from 'components/features/services/other-services';

interface IServicePage {
  services: IResidualService[];
}

const Service: NextPage<IServicePage> = ({ services }) => {
  return (
    <>
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
      messages: {
        ...require(`/locales/${locale}/shared.json`),
        ...require(`/locales/${locale}/pages/services.json`),
      },
    },
  };
}

export const getStaticPaths = () => {
  const services = getServesesPaths();

  const paths = services.map((path: string) => ({ params: { name: path } }));

  return {
    paths,
    fallback: false,
  };
};

export default Service;
