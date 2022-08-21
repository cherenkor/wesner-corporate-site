import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

export default function ContactUs(): JSX.Element {
  const t = useTranslations();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const titleVariant = isMobile ? 'h4' : 'h2';
  const bodyVariant = isMobile ? 'body2' : 'body1';

  return (
    <Box component="section" bgcolor="grey.900" py={{ xs: 5, md: 6, lg: 11 }}>
      <Container fixed>
        <Stack
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          justifyContent={{ xs: 'flex-start', md: 'space-between' }}
          gap={2}
        >
          <Stack
            gap={{ xs: 1, lg: 2 }}
            maxWidth={{ xs: 1, md: 'clamp(384px, 70%, 70%)', lg: 696 }}
          >
            <Typography variant={titleVariant} color="grey.300">
              {t('contactUs.title')}
            </Typography>
            <Typography variant={bodyVariant} color="grey.300">
              {t('contactUs.description')}
            </Typography>
          </Stack>
          <Button color="secondary">{t('contactUs.button')}</Button>
        </Stack>
      </Container>
    </Box>
  );
}
