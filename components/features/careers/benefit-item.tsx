import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

export interface IBenefitItem {
  title: string;
  img: string;
}

export default function BenefitItem({ title, img }: IBenefitItem): JSX.Element {
  const getResponsiveFont = useGetResponsiveFontVariants();

  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Box flex="none">
        <Image src={img} alt="" width={80} height={80} objectFit="cover" />
      </Box>
      <Typography
        variant={getResponsiveFont({ medium: 'body2', large: 'body1' })}
      >
        {title}
      </Typography>
    </Stack>
  );
}
