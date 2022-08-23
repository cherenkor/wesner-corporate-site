import { Box, Typography } from '@mui/material';
import React from 'react';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface IRoadmapItem {
  year: string;
  description: string;
}

export default function RoadmapItem({
  year,
  description,
}: IRoadmapItem): JSX.Element {
  const getResponsiveFont = useGetResponsiveFontVariants();

  return (
    <Box
      position="relative"
      pb={4}
      minHeight={{ sm: 155, lg: 172 }}
      display="flex"
      alignItems="flex-end"
    >
      <Box
        position="absolute"
        left={0}
        bottom={0}
        width={2}
        height={32}
        bgcolor="grey.900"
      />
      <Typography
        component="div"
        variant={getResponsiveFont({ medium: 'h3', large: 'h2' })}
        sx={{
          position: 'absolute',
          bottom: 56,
          writingMode: 'vertical-lr',
          textOrientation: 'mixed',
          transform: 'rotateZ(180deg)',
          left: { sm: -28, lg: -28 },
        }}
      >
        {year}
      </Typography>
      <Typography pl={4.5} maxWidth={132} variant="body2" color="grey.800">
        {description}
      </Typography>
    </Box>
  );
}
