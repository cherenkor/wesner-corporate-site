import { Container, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { IServiceFull } from 'models/interfaces/services/service.interface';
import Image from 'next/image';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface IProps {
  service: IServiceFull;
}

export default function ServiceBanner({ service }: IProps): JSX.Element {
  const { bannerUrl, description, name } = service;
  const getFontVariant = useGetResponsiveFontVariants();

  return (
    <Box pt={{ xs: 6, md: 5, lg: 14 }}>
      <Container>
        <Stack gap={{ xs: 1, lg: 2 }}>
          <Typography
            component="h1"
            variant={getFontVariant({ small: 'h3', medium: 'h2', large: 'h1' })}
          >
            {name}
          </Typography>
          <Typography
            variant={getFontVariant({ medium: 'body2', large: 'body1' })}
            maxWidth={{ xs: 1, lg: 700 }}
          >
            {description}
          </Typography>
        </Stack>
      </Container>
      <Box
        mt={{ xs: 3, md: 5, lg: 6 }}
        position="relative"
        width={1}
        sx={{ aspectRatio: '90 / 29' }}
      >
        <Image src={bannerUrl} alt="" layout="fill" />
      </Box>
    </Box>
  );
}
