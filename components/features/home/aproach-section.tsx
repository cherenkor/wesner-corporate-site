import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTranslations } from 'next-intl';
import AproachItem from 'components/features/home/aproach-item';
import { useGetAproachesConfig } from 'models/configs/home/aproaches.config';

export default function AproachSection(): JSX.Element {
  const t = useTranslations();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const aproaches = useGetAproachesConfig();

  const getTitleVariant = () => {
    if (isMobile) return 'h4';
    if (isTablet) return 'h3';
    return 'h2';
  };

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 15, lg: 17 } }}>
      <Container fixed>
        <Typography variant={getTitleVariant()} mb={3}>
          {t('aproaches.title')}
        </Typography>
        <Grid container spacing={3}>
          {aproaches.map(({ number, title, description }) => (
            <Grid key={number} item xs={12} lg={4}>
              <AproachItem
                number={number}
                title={title}
                description={description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
