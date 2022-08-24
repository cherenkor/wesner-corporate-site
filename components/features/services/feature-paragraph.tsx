import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { IServiceFeatureParagraph } from 'models/interfaces/services/service.interface';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

export default function FeatureParagraph({
  paragraph,
}: {
  paragraph: IServiceFeatureParagraph;
}): JSX.Element {
  const getResponsiveFont = useGetResponsiveFontVariants();
  const { text, list } = paragraph;

  return (
    <Stack color="grey.800" gap={{ xs: 0.5, lg: 1 }}>
      <Typography
        variant={getResponsiveFont({ medium: 'body2', large: 'body1' })}
      >
        {text}
      </Typography>
      {!!list?.length && (
        <Stack component="ul" m={0} pl={3}>
          {list.map((text, index) => (
            <Typography
              variant={getResponsiveFont({ medium: 'body2', large: 'body1' })}
              key={index}
              component="li"
            >
              {text}
            </Typography>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
