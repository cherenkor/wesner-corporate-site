import { Components, Theme, alpha } from '@mui/material';

export default function Chip(theme: Theme): Components {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          height: 48,
          borderRadius: theme.shape.borderRadius,
          fontSize: theme.typography.body1.fontSize,
          backgroundColor: alpha(theme.palette.common.black, 0.1),
        },
        colorPrimary: {
          backgroundColor: alpha(theme.palette.primary.main, 0.16),
          color: theme.palette.grey[900],
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
          },
        },
        label: {
          paddingLeft: 24,
          paddingRight: 24,
        },
        sizeSmall: {
          height: 40,
        },
        labelSmall: {
          paddingLeft: 16,
          paddingRight: 16,
        },
      },
    },
  };
}
