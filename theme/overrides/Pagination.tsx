import { Components, Theme, alpha, Typography } from '@mui/material';

export default function Chip(theme: Theme): Components {
  return {
    MuiPagination: {
      defaultProps: {
        shape: 'rounded',
      },
    },
    MuiPaginationItem: {
      defaultProps: {
        shape: 'rounded',
        components: {
          first: Typography,
        },
      },
      styleOverrides: {
        root: {
          margin: theme.spacing(0, 1.5),
          width: 48,
          height: 48,
          '&.Mui-selected': {
            backgroundColor: alpha(theme.palette.primary.main, 0.16),
          },
        },
      },
    },
  };
}
