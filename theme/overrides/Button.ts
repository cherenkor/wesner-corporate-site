import { Components, Theme, alpha } from '@mui/material';

export default function Button(theme: Theme): Components {
  return {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium',
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(1.5, 3),
          boxShadow: 'none',
          textTransform: 'none',
          boxSizing: 'border-box',
          height: 48,
        },
        containedPrimary: {
          border: `1px solid ${alpha(theme.palette.primary.main, 0)}`,
          '&:hover, &:active': {
            borderColor: '#40A9FF',
            boxShadow: 'none',
            background: `linear-gradient(${theme.palette.grey[700]}, ${theme.palette.grey[700]}), ${theme.palette.primary.main};`,
          },
          '&:focus-visible': {
            outline: `1px solid ${theme.palette.primary.main}`,
            outlineOffset: 2,
            boxShadow: 'none',
          },
        },
        containedSecondary: {
          background: theme.palette.secondary.main,
          '&:hover, &:active': {
            boxShadow: 'none',
            background: `linear-gradient(${theme.palette.grey[700]}, ${theme.palette.grey[700]}), ${theme.palette.secondary.main};`,
          },
          '&:focus-visible': {
            outline: `1px solid ${theme.palette.secondary.main}`,
            outlineOffset: 2,
            boxShadow: 'none',
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          color: theme.palette.grey[900],
        },
        colorInherit: {
          color: 'inherit',
        },
      },
    },
  };
}
