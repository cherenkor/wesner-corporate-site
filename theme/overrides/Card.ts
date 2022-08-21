import { Components, Theme } from '@mui/material';

export default function Card(theme: Theme): Components {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.darken,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 5),
          [theme.breakpoints.down('md')]: {
            padding: theme.spacing(2, 3),
          },
        },
      },
    },
  };
}
