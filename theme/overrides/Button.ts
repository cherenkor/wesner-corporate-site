import { Components, Theme } from '@mui/material';

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
        },
        containedSecondary: {
          background: theme.palette.secondary.main,
          '&:hover, &:active': {
            background: `linear-gradient(${theme.palette.grey[700]}, ${theme.palette.grey[700]}), ${theme.palette.secondary.main};`,
          },
          '&:focus-visible': {
            outline: `1px solid ${theme.palette.secondary.main}`,
            outlineOffset: 2,
          },
        },
      },
    },
  };
}
