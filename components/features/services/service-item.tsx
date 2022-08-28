import { Card, CardContent, Link, Typography, useTheme } from '@mui/material';
import { ERoutes } from 'models/enums/routes.enum';
import NextLink from 'next/link';
import Image from 'next/image';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';
import EastIcon from '@mui/icons-material/East';
import { IResidualService } from 'models/interfaces/services/service.interface';

interface IServiceItem {
  item: IResidualService;
}

export default function ServiceItem({ item }: IServiceItem): JSX.Element {
  const theme = useTheme();
  const getFontVariants = useGetResponsiveFontVariants();

  const { path, name, shortDescription, whiteIconUrl } = item;

  return (
    <NextLink href={`${ERoutes.Services}/${path}`} passHref>
      <Link
        sx={{
          textDecoration: 'none',
          transition: theme.transitions.create('all', {
            duration: theme.transitions.duration.short,
          }),
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      >
        <Card
          component="article"
          sx={{
            position: 'relative',
            pt: { xs: 2, md: 3 },
            pb: { xs: 5, md: 6 },
            bgcolor: 'grey.100',
            height: 1,
          }}
        >
          <CardContent>
            <Image src={whiteIconUrl || ''} alt="" width={80} height={80} />
            <Typography
              component="h3"
              variant={getFontVariants({ medium: 'h5', large: 'h4' })}
              color="grey.300"
              mt={{ xs: 2, md: 3 }}
            >
              {name}
            </Typography>
            <Typography
              variant={getFontVariants({ medium: 'body2', large: 'body1' })}
              color="grey.300"
              mt={1}
            >
              {shortDescription}
            </Typography>
            <EastIcon
              sx={{
                position: 'absolute',
                bottom: { xs: 8, md: 16 },
                right: { xs: 16, md: 24 },
                color: 'grey.300',
              }}
            />
          </CardContent>
        </Card>
      </Link>
    </NextLink>
  );
}
