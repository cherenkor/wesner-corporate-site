import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';
import ServiceItem from 'components/features/home/service-item';
import { useGetServicesConfig } from 'models/configs/home/services.config';

export default function ServicesSection(): JSX.Element {
  const t = useTranslations('services');
  const services = useGetServicesConfig();

  const getTitleVeriants = useGetResponsiveFontVariants();

  return (
    <Box component="section" py={{ xs: 5, md: 10, lg: 17 }}>
      <Container fixed>
        <Typography
          variant={getTitleVeriants({ small: 'h4', medium: 'h3', large: 'h2' })}
          mb={3}
        >
          {t('title')}
        </Typography>
        <Stack
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {services.map(({ title, description, img }) => (
            <ServiceItem
              key={title}
              description={description}
              img={img}
              title={title}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
