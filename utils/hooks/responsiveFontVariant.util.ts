import { useMediaQuery, useTheme } from '@mui/material';

type TTypoVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
  | 'inherit'
  | undefined;

interface ITitleVariants {
  small?: TTypoVariant;
  medium?: TTypoVariant;
  large: TTypoVariant;
}

export const useGetResponsiveFontVariants = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const getTitleVariant = ({ small, medium, large }: ITitleVariants) => {
    if (isMobile && small) return small;
    if (isTablet && medium) return medium;
    return large;
  };

  return getTitleVariant;
};
