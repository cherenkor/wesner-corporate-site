import { Container, Grid, Stack } from '@mui/material';
import { ICaseStudyFull } from 'models/interfaces/case-strudies/case-studies.interface';
import { useTranslations } from 'next-intl';
import CaseStudyAdditional from './case-study-additional';
import CaseStudyGeneral from './case-study-general';
import CaseStudyQuote from './case-study-quote';
import CaseStudySidebarCard from './case-study-sidebar-card';

interface IProps {
  caseStudy: ICaseStudyFull;
}

export default function CaseStudyMainInfo({ caseStudy }: IProps): JSX.Element {
  const t = useTranslations('caseStudies');
  const { technologies, customer, generalInfo, quote, additionalInfo } =
    caseStudy;
  const sidebarIsPresent = !!technologies?.length || customer;

  return (
    <Container sx={{ py: { xs: 7, md: 8, lg: 14 } }}>
      <Grid container spacing={{ xs: 2, md: 3, lg: 9 }}>
        {sidebarIsPresent && (
          <Grid component="aside" item xs={12} lg={4}>
            <Stack gap={{ xs: 2, md: 3 }}>
              {customer && (
                <CaseStudySidebarCard
                  title={t('customerTitle')}
                  text={customer}
                />
              )}
              {!!technologies?.length && (
                <CaseStudySidebarCard
                  title={t('technologiesTitle')}
                  list={technologies}
                />
              )}
            </Stack>
          </Grid>
        )}
        <Grid item xs={12} lg={sidebarIsPresent ? 8 : 12}>
          <Stack gap={{ xs: 3, md: 5, lg: 6 }}>
            <CaseStudyGeneral generalInfo={generalInfo} />
            {quote && <CaseStudyQuote quote={quote} />}
            {!!additionalInfo?.length && (
              <>
                {additionalInfo.map((item, index) => (
                  <CaseStudyAdditional key={index} additionalInfo={item} />
                ))}
              </>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
