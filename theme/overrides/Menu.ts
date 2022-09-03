import { typography } from './../typography';
import { alpha, Components, Theme } from '@mui/material';

export default function Menu(theme: Theme): Components {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          boxShadow: theme.shadows[10],
          backgroundColor: theme.palette.background.paper,
          backdropFilter: 'blur(4px)',
          marginTop: '0 !important',
          padding: 0,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            backdropFilter: 'blur(4px)',
            boxShadow: theme.shadows[10],
          },
        },
        list: {
          padding: 0,
        },
      },
    },
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
        autoFocus: true,
      },
      styleOverrides: {
        root: {
          fontSize: theme.typography.body2.fontSize,
          lineHeight: theme.typography.body2.lineHeight,
          color: theme.palette.grey[800],
          padding: theme.spacing(1, 2),
          '&:hover, &:focus-within': {
            backgroundColor: alpha(theme.palette.primary.main, 0.04),
          },
        },
        focusVisible: {
          backgroundColor: alpha(theme.palette.primary.main, 0.04),
        },
        selected: {
          color: theme.palette.primary.main,
          backgroundColor: 'transparent',
        },
      },
    },
  };
}
