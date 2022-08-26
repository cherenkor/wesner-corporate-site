import { Components, Theme } from '@mui/material';

export default function Input(theme: Theme): Components {
  return {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          color: theme.palette.grey[900],
          fontSize: theme.typography.body1.fontSize,
          lineHeight: theme.typography.body1.lineHeight,
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-focused': {
            backgroundColor: 'transparent',
          },
        },
        input: {
          padding: theme.spacing(1, 0),
        },
        multiline: {
          padding: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        filled: {
          transform: 'translate(0, 8px) scale(1)',
          '&.Mui-focused,&.MuiFormLabel-filled': {
            color: theme.palette.grey[900],
            transform: 'translate(0, -16px) scale(0.75)',
          },
        },
      },
    },
  };
}
