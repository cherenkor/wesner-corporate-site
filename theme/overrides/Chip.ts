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
