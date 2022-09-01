import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { ITermsBlock } from 'models/interfaces/terms/terms.interface';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface IProps {
  content: ITermsBlock[];
}

export default function TermsContent({ content }: IProps): JSX.Element {
  const getFontVariants = useGetResponsiveFontVariants();

  return (
    <Stack gap={{ xs: 2, md: 3, lg: 6 }}>
      {content.map(({ title, content }, index) => (
        <Stack key={index} gap={1}>
          <Typography
            component="h2"
            variant={getFontVariants({
              small: 'h6',
              medium: 'h5',
              large: 'h4',
            })}
          >
            {title}
          </Typography>
          <Stack>
            {content?.text?.map((item, index) => (
              <>
                {typeof item === 'string' && (
                  <Typography
                    component="div"
                    color="grey.800"
                    variant="body2"
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item }}
                    sx={{
                      '& a': {
                        textDecoration: 'none',
                        color: 'primary.main',
                      },
                    }}
                  />
                )}
              </>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
