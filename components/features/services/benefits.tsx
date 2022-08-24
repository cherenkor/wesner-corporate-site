import { Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { IServiceBenefit } from 'models/interfaces/services/service.interface';
import Image from 'next/image';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface IProps {
  benefits: IServiceBenefit[];
}

export default function Benefits({ benefits }: IProps) {
  const getResponsiveFont = useGetResponsiveFontVariants();

  return (
    <Stack position="sticky" gap={{ xs: 2, md: 3 }} top={100}>
      {benefits?.map(({ text, imgUrl }, index) => (
        <Stack
          key={index}
          direction="row"
          gap={{ xs: 2, md: 3 }}
          alignItems="center"
        >
          <Box flex="none">
            <Image src={imgUrl} alt="" width={80} height={80} />
          </Box>
          <Typography
            color="grey.800"
            variant={getResponsiveFont({
              medium: 'body2',
              large: 'body1',
            })}
          >
            {text}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}
