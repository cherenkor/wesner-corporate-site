import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import Image from 'next/image';
import Logo1 from 'public/images/home/logos/logo1.png';
import Logo2 from 'public/images/home/logos/logo2.png';
import Logo3 from 'public/images/home/logos/logo3.png';
import Logo4 from 'public/images/home/logos/logo4.png';

export default function BannerLogos(): JSX.Element {
  return (
    <Stack
      direction="row"
      maxHeight={{ xs: 48, md: 64, lg: 80 }}
      gap={{ xs: 2, md: 7, lg: 15 }}
      pr={{ md: 10, lg: 23 }}
      py={{ xs: 1, md: 2 }}
      alignItems="center"
    >
      <Image src={Logo1} alt="partner company" width="158" height="48" />
      <Image src={Logo2} alt="partner company" width="168" height="26" />
      <Box height={22}>
        <Image src={Logo3} alt="partner company" width="168" height="22" />
      </Box>
      <Image src={Logo4} alt="partner company" width="72" height="48" />
    </Stack>
  );
}
