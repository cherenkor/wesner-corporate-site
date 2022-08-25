import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';
import Image from 'next/image';
import RightImage from 'public/careers/why-you-join/rightDecoration.png';
import LeftImage from 'public/careers/why-you-join/leftDecoration.png';

export default function WhyJoin(): JSX.Element {
  const t = useTranslations('careers.whyJoin');
  const getResponsiveFont = useGetResponsiveFontVariants();
  const bodyVariant = getResponsiveFont({ medium: 'body2', large: 'body1' });

  return (
    <Box component="section">
      <Stack
        pl={{ xs: 3, md: 13.5, lg: 'calc((100vw - 1200px) / 2 + 36px)' }}
        direction={{ xs: 'column-reverse', lg: 'row' }}
        gap={{ xs: 3, md: 6, lg: 9 }}
      >
        <Stack color="grey.800" gap={1} pr={{ xs: 3, md: 13.5, lg: 0 }}>
          <Typography
            color="grey.900"
            variant={getResponsiveFont({
              small: 'h4',
              medium: 'h3',
              large: 'h2',
            })}
            mb={{ lg: 1 }}
            mt={{ lg: 6 }}
          >
            {t('title')}
          </Typography>
          <Typography variant={bodyVariant}>{t('description')}</Typography>
          <Stack gap={1}>
            <Typography variant={bodyVariant}>{t('example')}</Typography>
            <Box component="ul" sx={{ m: 0, pl: 3 }}>
              <Typography variant={bodyVariant} component="li">
                {t('listitem1')}
              </Typography>
              <Typography variant={bodyVariant} component="li">
                {t('listitem2')}
              </Typography>
            </Box>
          </Stack>
          <Box
            mt={{ xs: 3, md: 5, lg: 6 }}
            position="relative"
            width={1}
            sx={{ aspectRatio: { xs: '39 / 35', md: '15 / 7' } }}
          >
            <Image src={LeftImage} alt="" layout="fill" objectFit="cover" />
          </Box>
        </Stack>
        <Box
          position="relative"
          width={{ xs: 1, lg: 612 }}
          flexShrink={0}
          sx={{ aspectRatio: { xs: '7 / 5', md: '11 / 6', lg: 'unset' } }}
        >
          <Image
            src={RightImage}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Stack>
    </Box>
  );
}
