import { pxToRem, responsiveFontSizes } from './utils/font.ustils';

const HEADING_FONT = "'Space Grotesk', sans-serif";
const BASE_FONT = "'IBM Plex Sans', sans-serif";

export const typography = {
  fontFamily: BASE_FONT,
  h1: {
    fontSize: pxToRem(56),
    lineHeight: 64 / 56,
    fontWeight: 700,
    letterSpacing: 0,
    fontFamily: HEADING_FONT,
  },
  h2: {
    fontSize: pxToRem(48),
    lineHeight: 56 / 48,
    fontWeight: 700,
    letterSpacing: '-1.05px',
    fontFamily: HEADING_FONT,
  },
  h3: {
    fontSize: pxToRem(40),
    lineHeight: 48 / 40,
    fontWeight: 700,
    fontFamily: HEADING_FONT,
  },
  h4: {
    fontSize: pxToRem(28),
    lineHeight: 40 / 28,
    fontWeight: 700,
    letterSpacing: '-0.63px',
    fontFamily: HEADING_FONT,
  },
  h5: {
    fontSize: pxToRem(18),
    lineHeight: 24 / 18,
    fontWeight: 700,
    fontFamily: HEADING_FONT,
  },
  h6: {
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
    fontWeight: 700,
    fontFamily: HEADING_FONT,
  },
  subtitle1: {
    fontSize: pxToRem(20),
    lineHeight: 32 / 20,
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: pxToRem(28),
    lineHeight: 40 / 28,
    fontWeight: 500,
  },
  body1: {
    fontSize: pxToRem(18),
    lineHeight: 24 / 18,
    fontWeight: 400,
  },
  body2: {
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
    fontWeight: 400,
  },
  caption: {
    fontSize: pxToRem(14),
    lineHeight: 24 / 14,
    fontWeight: 300,
  },
  button: {
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
    fontWeight: 700,
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 18 }),
  },
};
