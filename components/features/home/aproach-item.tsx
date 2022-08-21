import {
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';

interface IAproachItem {
  number: string;
  title: string;
  description: string;
}

export default function AproachItem({
  number,
  title,
  description,
}: IAproachItem): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const titleVariant = isMobile ? 'h5' : 'h4';
  const textVariant = isMobile ? 'body2' : 'body1';

  return (
    <Card sx={{ height: 1 }}>
      <CardContent sx={{ py: { xs: 3, md: 5 } }}>
        <Typography variant="subtitle1" color="primary.main" mb={1}>
          {number}
        </Typography>
        <Typography
          variant={titleVariant}
          color={theme.palette.grey[900]}
          mb={1}
        >
          {title}
        </Typography>
        <Typography variant={textVariant} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
