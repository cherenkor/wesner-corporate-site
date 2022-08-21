import { Components, Theme } from '@mui/material';

export default function Container(theme: Theme): Components {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '100%',
          [theme.breakpoints.up('xs')]: {
            maxWidth: '100%',
            paddingLeft: 24,
            paddingRight: 24,
          },
          [theme.breakpoints.up('md')]: {
            maxWidth: '100%',
            paddingLeft: 108,
            paddingRight: 108,
          },
          [theme.breakpoints.up('lg')]: {
            maxWidth: theme.breakpoints.values.lg,
            paddingLeft: 36,
            paddingRight: 36,
          },
        },
      },
    },
  };
}
