import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { server } from 'models/configs';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

export interface ITeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

export default function Team({ team }: { team: ITeamMember[] }): JSX.Element {
  const t = useTranslations('company');
  const getFontVariants = useGetResponsiveFontVariants();

  return (
    <Box py={{ xs: 5, md: 10, lg: 17 }}>
      <Container fixed>
        <Typography
          variant={getFontVariants({ small: 'h4', medium: 'h3', large: 'h2' })}
          mb={{ xs: 3, md: 5, lg: 6 }}
        >
          {t('companyTitle')}
        </Typography>
        <Grid container rowSpacing={{ xs: 3, md: 5, lg: 6 }} columnSpacing={3}>
          {team.map(({ id, name, position, image }) => (
            <Grid key={id} item xs={6} md={6} lg={3}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 1,
                  overflow: 'hidden',
                  width: 1,
                  aspectRatio: '11 / 13',
                }}
              >
                <Image
                  objectFit="cover"
                  layout="fill"
                  src={`${server}/${image}`}
                  alt="name"
                />
              </Box>
              <Typography
                component="div"
                variant={getFontVariants({
                  medium: 'h5',
                  large: 'h4',
                })}
                mt={{ xs: 1, md: 3 }}
              >
                {name}
              </Typography>
              <Typography
                variant={getFontVariants({
                  medium: 'body2',
                  large: 'body1',
                })}
                mt={1}
                color="grey.800"
              >
                {position}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
