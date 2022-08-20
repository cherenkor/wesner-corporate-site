import Logo from '@components/shared/logo';
import { Link, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';
import { mainNavConfig } from 'models/configs/main-nav.config';
import NextLink from 'next/link';
import React from 'react';

export default function Footer(): JSX.Element {
  const theme = useTheme();
  return (
    <Box component="section" bgcolor="grey.900" color="grey.200">
      <Container fixed={true} sx={{ py: 8 }}>
        <Grid container columnSpacing={12}>
          <Grid item xs={12} lg={4}>
            <Stack gap={1}>
              <Logo />
              <Typography variant="body2">
                Wesner-Softwareentwicklung GmbH.
              </Typography>
              <Typography variant="body2">
                Seamless solutions from the back-end to the Internet of Things.
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={8}>
            <Stack direction="row" sx={{ gap: 9 }}>
              <Box>
                <Typography variant="h6" mb={2}>
                  Menu
                </Typography>
                <Stack gap={1}>
                  {mainNavConfig.map(({ name, path }) => (
                    <NextLink key={name} href={path} passHref={true}>
                      <Typography
                        component="a"
                        variant="body2"
                        sx={{
                          cursor: 'pointer',
                          color: 'grey.200',
                          textDecoration: 'none',
                        }}
                      >
                        {name}
                      </Typography>
                    </NextLink>
                  ))}
                </Stack>
              </Box>
              <Stack gap={2}>
                <Typography variant="h6">Office</Typography>
                <Typography variant="body2">
                  Kornstr. 235 D-28201 Bremen
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container sx={{ py: 3 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="caption">
            ©2022 Wesner-Softwareentwicklung GmbH
          </Typography>
          <Stack
            direction="row"
            sx={{
              typography: theme.typography.caption,
            }}
          >
            <NextLink href="/policy" passHref>
              <Link
                sx={{
                  color: theme.palette.grey[200],
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                Privacy Policy
              </Link>
            </NextLink>
            &nbsp;/&nbsp;
            <NextLink href="/terms" passHref>
              <Link
                sx={{
                  color: theme.palette.grey[200],
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                Terms and Conditions
              </Link>
            </NextLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
