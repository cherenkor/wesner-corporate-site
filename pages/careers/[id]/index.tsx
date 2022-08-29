import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { BaseLayout } from 'components/layouts/base-layout';
import { ReactElement } from 'react';
import ContactUs from 'components/shared/contact-us/contact-us';
import { IPositionFull } from 'models/interfaces/careers/position.interface';
import Header from 'components/features/careers/position/header';
import { getCareersPaths, getSinglePosition } from 'data-utils/careers';
import { Container, Stack } from '@mui/material';
import InfoSection from 'components/features/careers/position/general-section';
import Additional from 'components/features/careers/position/additional';
import HeaderDecoration from 'components/shared/header-decoration';

interface IPositionPage {
  position: IPositionFull;
}

const Position: NextPage<IPositionPage> = ({ position }) => {
  const { generalInfo, otherInfo } = position;

  return (
    <>
      <HeaderDecoration />

      <Container fixed>
        <Stack
          px={{ xs: 3, lg: 27 }}
          gap={{ xs: 3, md: 5, lg: 6 }}
          pb={{ xs: 6, lg: 10 }}
        >
          <Header position={position} />
          {generalInfo && <InfoSection info={generalInfo} />}
          {!!otherInfo?.length && (
            <>
              {otherInfo.map((item, index) => (
                <InfoSection key={index} info={item} />
              ))}
            </>
          )}
          <Additional />
        </Stack>
      </Container>
      <ContactUs />
    </>
  );
};

Position.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout isPrimaryHeader>{page}</BaseLayout>;
};

export const getStaticProps: GetStaticProps = ({ locale, params }) => {
  return {
    props: {
      position: getSinglePosition(locale, params?.id as string),
      messages: {
        ...require(`/locales/${locale}/shared.json`),
        ...require(`/locales/${locale}/pages/careers.json`),
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = ({ locales }) => {
  return {
    paths: getCareersPaths(locales),
    fallback: false,
  };
};

export default Position;
