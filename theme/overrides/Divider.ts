import { Components, Theme } from '@mui/material';

export default function Divider(theme: Theme): Components {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.grey[800],
        },
      },
    },
  };
}
