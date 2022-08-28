import { Stack, Typography, useTheme } from '@mui/material';
import { ICaseStudyQuote } from 'models/interfaces/case-strudies/case-studies.interface';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface IProps {
  quote: ICaseStudyQuote;
}

export default function CaseStudyQuote({ quote }: IProps): JSX.Element {
  const theme = useTheme();
  const { text, author } = quote;
  const getFontVariants = useGetResponsiveFontVariants();

  return (
    <Stack
      gap={0.5}
      fontFamily={theme.typography.h1.fontFamily}
      color="grey.800"
    >
      <Typography
        component="div"
        variant="h1"
        fontSize={{ xs: 80, lg: 120 }}
        color="secondary.main"
      >
        “
      </Typography>
      <Typography
        mt={{ xs: -5, lg: -7 }}
        component="p"
        variant={getFontVariants({ medium: 'body1', large: 'subtitle2' })}
        fontWeight={500}
      >
        {text}
      </Typography>
      <Typography
        textAlign="end"
        component="div"
        variant={getFontVariants({ medium: 'body1', large: 'subtitle2' })}
        fontWeight={700}
      >
        {author}
      </Typography>
    </Stack>
  );
}
