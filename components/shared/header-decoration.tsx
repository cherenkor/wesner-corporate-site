import { Box, Container, Stack } from '@mui/material';
import React from 'react';

export default function HeaderDecoration(): JSX.Element {
  return (
    <Stack
      justifyContent="flex-end"
      height={{ xs: 80, md: 104, lg: 160 }}
      bgcolor="primary.main"
    >
      <Container>
        <Box height={{ xs: 48, md: 64, lg: 80 }} bgcolor="grey.300" />
      </Container>
    </Stack>
  );
}
