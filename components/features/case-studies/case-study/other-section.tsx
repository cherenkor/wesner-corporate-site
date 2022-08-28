import { Box, Container, Grid, Typography } from '@mui/material';
import { ICaseStudy } from 'models/interfaces/case-strudies/case-studies.interface';
import { useTranslations } from 'next-intl';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';
import OtherCaseStudy from './other-case-study';

interface IProps {
  other: ICaseStudy[];
}

export default function OtherSection({ other }: IProps): JSX.Element {
  const getFontVariants = useGetResponsiveFontVariants();
  const t = useTranslations('caseStudies');

  return (
    <Box component="section" py={{ xs: 5, md: 6, lg: 10 }} bgcolor="grey.900">
      <Container>
        <Typography
          component="h2"
          color="grey.300"
          mb={{ xs: 3, md: 4, lg: 6 }}
          variant={getFontVariants({ small: 'h4', medium: 'h3', large: 'h2' })}
        >
          {t('otherTitle')}
        </Typography>
        <Grid container spacing={3}>
          {other.map((item, index) => (
            <Grid key={index} item xs={12} md={6}>
              <OtherCaseStudy caseStudy={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
