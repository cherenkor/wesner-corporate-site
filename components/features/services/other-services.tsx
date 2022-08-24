import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IResidualService } from 'models/interfaces/services/service.interface';
import { useTranslations } from 'next-intl';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';
import ServiceItem from './service-item';

interface IProps {
  services: IResidualService[];
}

export default function OtherServices({ services }: IProps) {
  const t = useTranslations('servicesPage.otherServices');
  const getFontVariants = useGetResponsiveFontVariants();

  return (
    <Box component="section" py={{ xs: 5, md: 6, lg: 10 }} bgcolor="grey.900">
      <Container fixed>
        <Typography
          variant={getFontVariants({ small: 'h4', medium: 'h3', large: 'h2' })}
          color="grey.300"
          mb={{ xs: 2, md: 3 }}
        >
          {t('title')}
        </Typography>
        <Stack
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: 2, md: 3 },
          }}
        >
          {services.map((item) => (
            <ServiceItem key={item.path} item={item} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
