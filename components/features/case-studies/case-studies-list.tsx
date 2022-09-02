import { Chip, Container, Grid, Pagination, Stack } from '@mui/material';
import { ERoutes } from 'models/enums/routes.enum';
import { ICaseStudy } from 'models/interfaces/case-strudies/case-studies.interface';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
  const { push, isReady, query } = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  const [activePage, setActivePage] = useState(1);
  const [filteredItems, setFilterdItems] = useState(caseStudies);
  const [itemsToShow, setItemsToShow] = useState(
    filteredItems?.slice(0, ITEM_PER_PAGE),
  );
  const paginationPagesCount = Math.ceil(
    (filteredItems?.length || 1) / ITEM_PER_PAGE,
  );

  const onPageChange = (pageNum: number) => {
    push(ERoutes.CaseStudies, {
      query: {
        category: activeFilter,
        activePage: pageNum,
      },
    });
    setActivePage(pageNum);
  };

  const onItemSelect = (category: string) => {
    setActivePage(1);
    push(ERoutes.CaseStudies, {
      query: {
        category,
        activePage: 1,
      },
    });
  };

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const active = urlSearchParams.get('activePage');
    if (active) {
      setActivePage(+active);
    }
  }, []);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const data = urlSearchParams.get('category');
    if (!data || data === 'All') {
      setActiveFilter('All');
      setFilterdItems(caseStudies);
    } else {
      setActiveFilter(data);
      setFilterdItems(
        caseStudies?.filter((item) => item.categories.includes(data as string)),
      );
    }
  }, [query, caseStudies, isReady, activePage]);

  useEffect(() => {
    setItemsToShow(
      filteredItems?.slice(
        ITEM_PER_PAGE * (activePage - 1),
        ITEM_PER_PAGE * activePage,
      ),
    );
  }, [activePage, filteredItems]);

  return (
    <Container>
      {categories?.length && (
        <Stack
          direction="row"
          gap={1}
          sx={{ overflowX: 'auto', flexWrap: 'wrap' }}
          pb={{ xs: 5, lg: 6 }}
        >
          {categories.map((item, index) => (
            <Chip
              key={index}
              label={item}
              onClick={() => onItemSelect(item)}
              color={item === activeFilter ? 'primary' : 'default'}
            />
          ))}
        </Stack>
      )}
      <Grid container columnSpacing={3} rowSpacing={{ xs: 5, md: 6, lg: 10 }}>
        {itemsToShow?.map((study) => (
          <Grid item key={study.id} xs={12} md={6}>
            <CaseStudy caseStudy={study} />
          </Grid>
        ))}
      </Grid>
      {(caseStudies?.length || 0) > ITEM_PER_PAGE && (
        <Stack alignItems="center" my={{ xs: 5, md: 6, lg: 10 }}>
          <Pagination
            page={activePage}
            count={paginationPagesCount}
            onChange={(_, number) => onPageChange(number)}
          />
        </Stack>
      )}
    </Container>
  );
}
