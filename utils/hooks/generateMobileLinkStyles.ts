import { useTheme } from "@mui/material";

export const useGenerateMobileLinkStyles = () => {
  const theme = useTheme();

  const getLinkStyles = (isActive: boolean) => ({
    height: 64,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    typography: theme.typography.body2,
    textDecoration: 'none',
    color: isActive ? theme.palette.grey[900] : theme.palette.grey[800],
    bgcolor: 'transparent !important',
    overflow: 'hidden',
    '&::before': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 2,
      width: 1,
      borderRadius: 1,
      transformOrigin: 'left',
      bgcolor: theme.palette.primary.main,
      transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.short,
      }),
      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
    },
    '&:hover&::before': {
      transform: 'scaleX(1)',
    },
  });

  return getLinkStyles;
};
