import { alpha, IconButton, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import { useGetMainNavConfig } from 'models/configs/main-nav.config';
import { useState } from 'react';
import Logo from '../logo';
import MobileNavigationItem from './mobile-navigation-item';
import { CloseIcon, MenuIcon } from '../icons';

export default function MobileNavigation({
  isPrimary,
}: {
  isPrimary: boolean | undefined;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const mainNavConfig = useGetMainNavConfig();
  const theme = useTheme();

  return (
    <>
      <Box
        color={isPrimary ? theme.palette.grey[300] : theme.palette.grey[900]}
        mr={{ xs: 1, md: 2 }}
      >
        <IconButton
          onClick={() => setOpen(true)}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 'min(768px, 100vw)',
            background: `linear-gradient(${alpha(
              theme.palette.primary.main,
              0.04,
            )}, ${alpha(theme.palette.primary.main, 0.04)}), ${
              theme.palette.grey[300]
            };`,
          },
        }}
      >
        <Container fixed>
          <Stack
            height={{ xs: 48, md: 64 }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box height={{ xs: 18, md: 20 }}>
              <Logo onClick={() => setOpen(false)} />
            </Box>
            <IconButton onClick={() => setOpen(false)} aria-label="close menu">
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack gap={2} pt={6} component="nav">
            {mainNavConfig.map((item) => (
              <MobileNavigationItem
                key={item.name}
                item={item}
                onClose={() => setOpen(false)}
              />
            ))}
          </Stack>
        </Container>
      </Drawer>
    </>
  );
}
