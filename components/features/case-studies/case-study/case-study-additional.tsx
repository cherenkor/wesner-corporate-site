import { Box, Stack, Typography } from '@mui/material';
import { ICaseStudyInfo } from 'models/interfaces/case-strudies/case-studies.interface';
import React from 'react';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface IProps {
  additionalInfo: ICaseStudyInfo;
}

export default function CaseStudyAdditional({
  additionalInfo,
}: IProps): JSX.Element {
  const { title, text, list } = additionalInfo;
  const getFontVariants = useGetResponsiveFontVariants();
  const bodyVariant = getFontVariants({ medium: 'body2', large: 'body1' });

  return (
    <Stack gap={1}>
      <Typography
        variant={getFontVariants({
          medium: 'h5',
          large: 'h4',
        })}
      >
        {title}
      </Typography>
      {!!text?.length && (
        <Stack gap={0.5} color="grey.800">
          {text.map((item, index) => (
            <Typography variant={bodyVariant} key={index}>
              {item}
            </Typography>
          ))}
        </Stack>
      )}
      {!!list?.length && (
        <Stack component="ul" sx={{ m: 0, pl: 3 }} gap={{ xs: 0.5, lg: 1 }}>
          {list.map((item, index) => (
            <Typography
              variant={bodyVariant}
              color="grey.800"
              component="li"
              key={index}
            >
              {item}
            </Typography>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
