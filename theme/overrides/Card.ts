import { Components, Theme } from '@mui/material';

export default function Card(theme: Theme): Components {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.darken,
          padding: theme.spacing(3, 3, 5),
          [theme.breakpoints.down('md')]: {
            padding: theme.spacing(2, 3),
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          '&:last-child': {
            padding: 0,
          },
          [theme.breakpoints.down('md')]: {
            padding: 0,
          },
        },
      },
    },
  };
}
