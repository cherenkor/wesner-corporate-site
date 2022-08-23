import { Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useGetExpertiseConfig } from 'models/configs/company/expertise.config';
import { useTranslations } from 'next-intl';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';
import Image from 'next/image';

export default function ExpertiseSection() {
  const expertises = useGetExpertiseConfig();
  const t = useTranslations('company');
  const getResponsiveFonts = useGetResponsiveFontVariants();

  return (
    <Container component="section" sx={{ py: { xs: 5, md: 10, lg: 17 } }}>
      <Typography
        component="h2"
        variant={getResponsiveFonts({ small: 'h4', medium: 'h3', large: 'h2' })}
        mb={3}
      >
        {t('title')}
      </Typography>
      <Grid container spacing={{ xs: 5, md: 3 }}>
        {expertises.map(({ name, img }) => (
          <Grid key={name} item xs={12} md={4}>
            <Stack
              alignItems="flex-start"
              gap={{ xs: 2, md: 3 }}
              py={{ xs: 2, lg: 3 }}
            >
              <Image src={img} alt="" width={80} height={80} />
              <Typography
                variant={getResponsiveFonts({
                  medium: 'body2',
                  large: 'body1',
                })}
                pr={{ lg: 6 }}
              >
                {name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
