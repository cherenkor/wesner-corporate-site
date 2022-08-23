import { LocaleSwitcher } from 'components/ui/ui-locale-switcher';
import { Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { useGetMainNavConfig } from 'models/configs/main-nav.config';
import Logo from '../logo';
import NavigationItem from './navigation-item';
import MobileNavigation from './mobile-navigation';

interface INavigateion {
  isPrimary?: boolean;
}

export default function Navigation({ isPrimary }: INavigateion): JSX.Element {
  const mainNavConfig = useGetMainNavConfig();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      bgcolor={isPrimary ? 'primary.main' : 'grey.300'}
      position="sticky"
      top={0}
      zIndex={2}
    >
      <Container fixed>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          height={{ xs: 48, md: 64 }}
        >
          <Box height={{ xs: 18, md: 20 }}>
            <Logo isWhite={isPrimary} />
          </Box>
          <Stack direction="row" alignItems="center" gap={2}>
            {!isDesktop && <MobileNavigation isPrimary={isPrimary} />}
            {isDesktop && (
              <Box display="flex">
                {mainNavConfig.map((item) => (
                  <NavigationItem
                    key={item.name}
                    item={item}
                    isPrimary={isPrimary}
                  />
                ))}
              </Box>
            )}
            <LocaleSwitcher />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
