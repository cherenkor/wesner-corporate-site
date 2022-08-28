import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import { useTranslations } from 'next-intl';
import MainImage from 'public/images/home/why-we-main.png';
import AddImage from 'public/images/home/why-we-add.png';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { useGetWhyWeConfig } from 'models/configs/home/why-we.config';
import { CheckIcon } from 'components/shared/icons';

export default function WhyWeSection(): JSX.Element {
  const t = useTranslations('whywe');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const bodyVariant = isTablet ? 'body2' : 'body1';

  const whyWeConfig = useGetWhyWeConfig();

  const getTitleVariant = () => {
    if (isMobile) return 'h4';
    if (isTablet) return 'h3';
    return 'h2';
  };

  return (
    <Box component="section">
      <Container fixed>
        <Stack
          sx={{
            flexDirection: { xs: 'column', lg: 'row' },
            gap: { xs: 3, md: 6, lg: 9 },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: { xs: 'clamp(200px, 100%, 500px)', md: 504 },
              flex: 'none',
            }}
          >
            <Image src={MainImage} alt="" priority width="504" height="504" />
          </Box>
          <Stack>
            <Typography
              variant={getTitleVariant()}
              color={theme.palette.grey[900]}
              mb={{ xs: 1, lg: 2 }}
            >
              {t('title')}
            </Typography>
            <Typography variant={bodyVariant} mb={{ xs: 2, lg: 3 }}>
              {t('description')}
            </Typography>
            <Stack gap={2}>
              <Stack direction="row" gap={1}>
                <CheckIcon />
                <Typography variant={bodyVariant}>
                  {t.rich('checkOne', {
                    important: (children) => (
                      <Box component="span" fontWeight={500}>
                        {children}
                      </Box>
                    ),
                  })}
                </Typography>
              </Stack>
              <Stack direction="row" gap={1}>
                <CheckIcon />
                <Typography variant={bodyVariant}>
                  {t.rich('checkTwo', {
                    important: (children) => (
                      <Box component="span" fontWeight={500}>
                        {children}
                      </Box>
                    ),
                  })}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            flexDirection: { xs: 'column-reverse', lg: 'row' },
            gap: { xs: 5, md: 6, lg: 13 },
            alignItems: { xs: 'flex-start', lg: 'center' },
            mt: { xs: 6, lg: -4 },
          }}
        >
          <Stack
            sx={{
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 2, md: 6 },
            }}
          >
            {whyWeConfig.map(({ count, title }) => (
              <Stack
                key={title}
                gap={1}
                flexDirection={{ xs: 'row', md: 'column' }}
                alignItems={{ xs: 'center', md: 'flex-start' }}
              >
                <Typography component="div" variant="h3">
                  {count}
                </Typography>
                <Typography variant={bodyVariant}>{title}</Typography>
              </Stack>
            ))}
          </Stack>
          <Box
            sx={{
              width: { xs: 'clamp(200px, 100%, 500px)', md: 360 },
              flex: 'none',
            }}
          >
            <Image src={AddImage} alt="" width="360" height="360" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
