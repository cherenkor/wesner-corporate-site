import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import OwnerAvatar from 'public/images/company/owner.png';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

export default function Owner(): JSX.Element {
  const t = useTranslations('company.owner');
  const getResponsiveFont = useGetResponsiveFontVariants();

  return (
    <Box
      component="section"
      width={1}
      pr={{ xs: 3, md: 13.5, lg: 'calc((100vw - 1200px) / 2 + 36px)' }}
      pl={{ xs: 3, md: 0 }}
      pb={{ xs: 0, md: 10, lg: 17 }}
    >
      <Stack direction={{ xs: 'column', md: 'row' }} gap={6}>
        <Box
          display="flex"
          flexBasis={{ xs: '100%', md: '40%' }}
          flexShrink={0}
          maxHeight={{ xs: 224, sm: 360, md: 'none' }}
        >
          <Image src={OwnerAvatar} alt="owner" objectFit="cover" />
        </Box>
        <Card
          sx={{ py: { xs: 3, md: 6, lg: 15 }, px: { xs: 2, md: 3, lg: 6 } }}
        >
          <Typography
            variant={getResponsiveFont({ medium: 'h5', large: 'h4' })}
            mb={1}
          >
            {t('title')}
          </Typography>
          <Typography
            variant={getResponsiveFont({ medium: 'body2', large: 'body1' })}
            color="grey.800"
          >
            {t('description')}
          </Typography>
        </Card>
      </Stack>
    </Box>
  );
}
