import { Link, Menu, MenuItem, SxProps } from '@mui/material';
import { IMainNavItem } from 'models/configs/main-nav.config';
import { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface INavMenuItem {
  item: IMainNavItem;
  sx?: SxProps;
}

export default function NavigationMenuItem({
  item,
  sx,
}: INavMenuItem): JSX.Element {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { name, children } = item;
  return (
    <>
      <Link
        component="button"
        sx={sx}
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        {name}
      </Link>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {(children || []).map(({ name, path }) => {
          const isActive = router.asPath.includes(path);
          return (
            <NextLink key={name} href={path}>
              <MenuItem
                autoFocus={false}
                sx={{
                  color: isActive ? 'primary.main' : 'grey.800',
                }}
                onClick={handleClose}
              >
                {name}
              </MenuItem>
            </NextLink>
          );
        })}
      </Menu>
    </>
  );
}
