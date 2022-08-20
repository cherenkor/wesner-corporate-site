import { alpha } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    tetriary: Palette['primary'];
  }
  interface PaletteOptions {
    tetriary: PaletteOptions['primary'];
  }
}

export const PRIMARY = {
  light: alpha('#4054D7', 0.2),
  main: '#4054D7',
  dark: '#4054D7',
};

export const SECONDARY = {
  light: alpha('#FFD02F', 0.2),
  main: '#FFD02F',
  dark: '#FFD02F',
};

export const TETRIARY = {
  light: alpha('#FF6575', 0.2),
  main: '#FF6575',
  dark: '#FF6575',
};

export const INFO = {
  light: alpha('#407CD7', 0.2),
  main: '#407CD7',
  dark: '#407CD7',
};

export const ERROR = {
  light: alpha('#FF4D4D', 0.2),
  main: '#FF4D4D',
  dark: '#FF4D4D',
};

export const SUCCESS = {
  light: alpha('#57963A', 0.2),
  main: '#57963A',
  dark: '#57963A',
};

export const WARNING = {
  light: alpha('#FFA24D', 0.2),
  main: '#FFA24D',
  dark: '#FFA24D',
};

export const GREY = {
    50: alpha('#FFFFFF', 0.01),
    100: alpha('#FFFFFF', 0.16),
    200: alpha('#FFFFFF', 0.85),
    300: '#FFFFFF',
    400: alpha('#050038', 0.04),
    500: alpha('#050038', 0.04),
    600: alpha('#050038', 0.1),
    700: alpha('#050038', 0.1),
    800: alpha('#050038', 0.85),
    900: '#050038',
    A100: alpha('#FFFFFF', 0.16),
    A200: alpha('#FFFFFF', 0.85),
    A400: alpha('#050038', 0.04),
    A700: alpha('#050038', 0.1),
}
