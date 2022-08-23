import { Link, useTheme } from '@mui/material';
import { IMainNavItem } from 'models/configs/main-nav.config';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import NextLink from 'next/link';
import MobileNavigationCollapse from './mobile-navigation-collapse';

interface IMobileNavItem {
  item: IMainNavItem;
  onClose(): void;
}

export default function MobileNavigationItem({
  item,
  onClose,
}: IMobileNavItem): JSX.Element {
  const router = useRouter();
  const theme = useTheme();
  const isActive = router.pathname.includes(item.path);
  const { name, path, children } = item;

  const linkStyles = useMemo(
    () => ({
      height: 64,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      typography: theme.typography.body2,
      textDecoration: 'none',
      color: isActive ? theme.palette.grey[800] : theme.palette.grey[800],
      bgcolor: 'transparent !important',
      overflow: 'hidden',
      '&::before': {
        content: "''",
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 2,
        width: 1,
        borderRadius: 1,
        transformOrigin: 'left',
        bgcolor: theme.palette.primary.main,
        transition: theme.transitions.create('all', {
          duration: theme.transitions.duration.short,
        }),
        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
      },
      '&:hover&::before': {
        transform: 'scaleX(1)',
      },
    }),
    [theme, isActive],
  );

  return (
    <>
      {!!children?.length ? (
        <MobileNavigationCollapse
          item={item}
          linkStyles={linkStyles}
          onClose={onClose}
        />
      ) : (
        <NextLink href={path} passHref={!children?.length}>
          <Link sx={linkStyles} onClick={onClose}>
            {name}
          </Link>
        </NextLink>
      )}
    </>
  );
}
