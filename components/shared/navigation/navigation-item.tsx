import { Link, useTheme } from '@mui/material';
import { IMainNavItem } from 'models/configs/main-nav.config';
import { useMemo } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';
import NavigationMenuItem from './navigation-menu-item';

interface INavigationItemProps {
  item: IMainNavItem;
  isPrimary?: boolean;
}

export default function NavigationItem({
  item,
  isPrimary,
}: INavigationItemProps): JSX.Element {
  const router = useRouter();
  const theme = useTheme();
  const isActive = router.pathname.includes(item.path);
  const { name, path, children } = item;

  const linkStyles = useMemo(
    () => ({
      height: 64,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      typography: theme.typography.body2,
      px: 2,
      textDecoration: 'none',
      color: isPrimary ? theme.palette.grey[200] : theme.palette.grey[800],
      overflow: 'hidden',
      '&::before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        height: 4,
        width: 1,
        borderRadius: 1,
        bgcolor: isPrimary
          ? theme.palette.grey[300]
          : theme.palette.primary.main,
        transition: theme.transitions.create('all', {
          duration: theme.transitions.duration.short,
        }),
        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
      },
      '&:hover': {
        color: isPrimary ? theme.palette.grey[300] : theme.palette.grey[900],
      },
      '&:hover&::before': {
        transform: 'scaleX(1)',
      },
    }),
    [theme, isActive, isPrimary],
  );

  return (
    <>
      {!!children?.length ? (
        <NavigationMenuItem item={item} sx={linkStyles} />
      ) : (
        <NextLink href={path} passHref={!children?.length} prefetch={false}>
          <Link sx={linkStyles}>{name}</Link>
        </NextLink>
      )}
    </>
  );
}
