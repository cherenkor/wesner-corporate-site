import { Chip, Container, Grid, Pagination, Stack } from '@mui/material';
import { ICaseStudy } from 'models/interfaces/case-strudies/case-studies.interface';
import { useState } from 'react';
import CaseStudy from './case-study';

interface IProps {
  caseStudies?: ICaseStudy[];
  categories?: string[];
}

const ITEM_PER_PAGE = 6;

export default function CaseStudiesList({
  caseStudies,
  categories,
}: IProps): JSX.Element {
  const [itemsToShow, setItemsToShow] = useState(
    caseStudies?.slice(0, ITEM_PER_PAGE),
  );
  const paginationPagesCount = Math.ceil(
    (caseStudies?.length || 1) / ITEM_PER_PAGE,
  );

  const onPageChange = (pageNum: number) => {
    setItemsToShow(
      caseStudies?.slice(
        ITEM_PER_PAGE * (pageNum - 1),
        ITEM_PER_PAGE * pageNum,
      ),
    );
  };

  return (
    <Container>
      {categories?.length && (
        <Stack
          direction="row"
          gap={1}
          sx={{ overflowX: 'auto' }}
          pb={{ xs: 5, lg: 6 }}
        >
          {categories.map((item, index) => (
            <Chip key={index} label={item} />
          ))}
        </Stack>
      )}
      <Grid container columnSpacing={3} rowSpacing={{ xs: 5, md: 6, lg: 10 }}>
        {itemsToShow?.map((study, index) => (
          <Grid item key={index} xs={12} md={6}>
            <CaseStudy caseStudy={study} />
          </Grid>
        ))}
      </Grid>
      {(caseStudies?.length || 0) > ITEM_PER_PAGE && (
        <Stack alignItems="center" my={{ xs: 5, md: 6, lg: 10 }}>
          <Pagination
            count={paginationPagesCount}
            onChange={(_, number) => onPageChange(number)}
          />
        </Stack>
      )}
    </Container>
  );
}
