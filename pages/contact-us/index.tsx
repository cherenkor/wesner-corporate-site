import type { NextPage } from 'next';
import { BaseLayout } from '@components/layouts/base-layout';
import { ReactElement } from 'react';
import Container from '@mui/material/Container';
import { Box, Stack } from '@mui/material';
import Title from 'components/features/contact-us/title';
import Image from 'next/image';
import StartDecoration from 'public/images/contact-us/start-decoration.png';

const ContactUs: NextPage = () => {
  return (
    <Container fixed>
      <Stack
        display="grid"
        gridTemplateColumns={{ xs: '1fr', lg: '1fr 456px' }}
        pt={{ xs: 6, lg: 14 }}
        pb={{ xs: 2, md: 3 }}
        rowGap={{ xs: 5, lg: 6 }}
        columnGap={12}
      >
        <Title />
        <Image src={StartDecoration} alt="" priority />
        <Box gridColumn={{ xs: 1, lg: 2 }} gridRow={{ xs: 2, lg: '1/3' }}>
          Hello
        </Box>
      </Stack>
    </Container>
  );
};

ContactUs.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: {
        ...require(`/locales/${locale}/shared.json`),
        ...require(`/locales/${locale}/pages/contact-us.json`),
      },
    },
  };
}

export default ContactUs;
