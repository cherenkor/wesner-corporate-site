import BackBtn from 'components/shared/back-btn';
import Box from '@mui/material/Box';
import { ERoutes } from 'models/enums/routes.enum';
import { useTranslations } from 'next-intl';
import { ICaseStudyFull } from 'models/interfaces/case-strudies/case-studies.interface';
import { Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface IProps {
  caseStudy: ICaseStudyFull;
}

export default function CaseStudyBanner({ caseStudy }: IProps): JSX.Element {
  const t = useTranslations('caseStudies.singleCase');
  const getFontVariants = useGetResponsiveFontVariants();
  const { title, imgUrl } = caseStudy;

  return (
    <Box pt={{ xs: 6, lg: 14 }}>
      <Container fixed>
        <Stack
          alignItems="flex-start"
          gap={{ xs: 2, md: 3, lg: 6 }}
          mb={{ xs: 3, md: 5, lg: 6 }}
        >
          <BackBtn path={ERoutes.CaseStudies} text={t('backBtn')} />
          <Typography
            component="h1"
            variant={getFontVariants({
              small: 'h4',
              medium: 'h3',
              large: 'h2',
            })}
          >
            {title}
          </Typography>
        </Stack>
      </Container>
      <Box
        sx={{
          position: 'relative',
          width: 1,
          aspectRatio: { xs: '9 / 4', md: '96 / 35', lg: '3 / 1' },
        }}
      >
        <Image src={imgUrl} alt="" layout="fill" objectFit="cover" priority />
      </Box>
    </Box>
  );
}
