import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ITerms } from 'models/interfaces/terms/terms.interface';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface IProps {
  header: ITerms;
}

export default function TermsHeader({ header }: IProps): JSX.Element {
  const { title, lastUpdated, description } = header;
  const getResponsiveFonts = useGetResponsiveFontVariants();

  return (
    <Stack gap={{ xs: 1, md: 2, lg: 3 }}>
      <Typography
        component="h1"
        variant={getResponsiveFonts({ small: 'h4', medium: 'h3', large: 'h2' })}
      >
        {title}
      </Typography>
      <Typography
        component="div"
        variant={getResponsiveFonts({ medium: 'h6', large: 'h5' })}
        mb={1}
      >
        {lastUpdated}
      </Typography>
      <Stack gap={1}>
        {description.map((item, index) => (
          <Typography
            component="div"
            color="grey.800"
            variant="body2"
            key={index}
            sx={{
              '& a': {
                textDecoration: 'none',
                color: 'primary.main',
              },
            }}
          >
            <Box component="div" dangerouslySetInnerHTML={{ __html: item }} />
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}
