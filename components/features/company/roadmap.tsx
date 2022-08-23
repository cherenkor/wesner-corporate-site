import { alpha, Stack, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { useTranslations } from 'next-intl';
import React from 'react';
import RoadmapItem from './roadmap-item';

export default function Roadmap() {
  const theme = useTheme();
  const t = useTranslations('company.roadmap');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isAbleToview = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {isAbleToview && (
        <Box
          sx={{
            position: 'relative',
            bgcolor: alpha(theme.palette.primary.main, 0.04),
            pt: { sm: 10, lg: 15 },
            pb: { sm: 6, lg: 10 },
            pl: '25%',
          }}
        >
          <Stack
            direction="row"
            pr={{ xs: 2.5, lg: 19.5 }}
            justifyContent="space-between"
          >
            <RoadmapItem year="2016" description={t('item1')} />
            <RoadmapItem year="2020" description={t('item2')} />
            {isDesktop && <RoadmapItem year="2022" description={t('item3')} />}
          </Stack>
          <Box position="relative" width={1} height={2} bgcolor="grey.900" />
        </Box>
      )}
    </>
  );
}
