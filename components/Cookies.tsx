import {
  IconButton,
  Typography,
  useTheme,
  Button,
  Box,
  Link,
} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import { ERoutes } from 'models/enums/routes.enum';
import React from 'react';
import { deleteCookie, setCookie } from 'utils/cookies';
import { CloseIcon } from './shared/icons';
import NextLink from 'next/link';

interface IProps {
  open: boolean;
  setOpen(Value: boolean): void;
}

export default function Cookies({ open, setOpen }: IProps): JSX.Element {
  const theme = useTheme();
  const onAccept = () => {
    deleteCookie('user_cookie_consent');
    setCookie('user_cookie_consent', 1, 30);
    setOpen(false);
  };

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Box>
        <Stack
          direction="column"
          sx={{
            flexDirection: 'column',
            gap: 1,
            width: 576,
            maxWidth: { xs: 1, md: 576 },
            p: 3,
            borderTop: `4px solid ${theme.palette.primary.main}`,
            background:
              'linear-gradient(0deg, rgba(64, 84, 215, 0.04), rgba(64, 84, 215, 0.04)), #FFFFFF;',
            borderRadius: 1,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width={1}
          >
            <Typography component="div" variant="h4">
              Cookies
            </Typography>
            <IconButton color="inherit" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Typography variant="body1" color="grey.800">
            We Use cookies to give you a great user experience on our website.
            To learn more, read our{' '}
            <NextLink href={ERoutes.Policy} passHref>
              <Link color="inherit">Cookie Policy</Link>
            </NextLink>{' '}
            or manage your settings at Cookie Preferences.
          </Typography>
          <Stack width={1} direction="row" justifyContent="flex-end" mt={1}>
            <Button variant="outlined" onClick={onAccept}>
              Accept
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Snackbar>
  );
}
