import { alpha, Box, Card, Typography, useTheme } from '@mui/material';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface ICardProps {
  title: string;
  list?: string[];
  text?: string;
}

export default function CaseStudySidebarCard({
  title,
  list,
  text,
}: ICardProps) {
  const getResponsiveFonts = useGetResponsiveFontVariants();
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: { xs: 2, md: 3 },
        bgcolor: alpha(theme.palette.primary.main, 0.04),
      }}
    >
      <Typography
        component="h2"
        variant={getResponsiveFonts({ medium: 'h5', large: 'h4' })}
        mb={1}
      >
        {title}
      </Typography>
      {text && (
        <Typography color="grey.800" variant="body2">
          {text}
        </Typography>
      )}
      {!!list?.length && (
        <Box component="ul" sx={{ m: 0, pl: 3 }} color="grey.800">
          {list.map((item, index) => (
            <Typography variant="body2" key={index} component="li">
              {item}
            </Typography>
          ))}
        </Box>
      )}
    </Card>
  );
}
