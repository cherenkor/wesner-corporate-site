import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IServiceFeature } from 'models/interfaces/services/service.interface';
import React from 'react';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';
import FeatureParagraph from './feature-paragraph';

export default function ServiceFeature({
  feature,
}: {
  feature: IServiceFeature;
}) {
  const getResponsiveFont = useGetResponsiveFontVariants();
  const { title, paragraphs } = feature;

  return (
    <Stack gap={1} gridColumn={1}>
      <Typography
        component="h3"
        variant={getResponsiveFont({ medium: 'h5', large: 'h4' })}
      >
        {title}
      </Typography>
      {!!paragraphs.length && (
        <Stack gap={1}>
          {paragraphs.map((paragraph, index) => (
            <FeatureParagraph key={index} paragraph={paragraph} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
