import { Box, Chip, Link, Stack, Typography, useTheme } from '@mui/material';
import { ERoutes } from 'models/enums/routes.enum';
import { ICaseStudy } from 'models/interfaces/case-strudies/case-studies.interface';
import Image from 'next/image';
import NextLink from 'next/link';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface IProps {
  caseStudy: ICaseStudy;
}

export default function CaseStudy({ caseStudy }: IProps): JSX.Element {
  const theme = useTheme();
  const { title, categories, imgUrl, previewUrl, id } = caseStudy;
  const getResponsiveFonts = useGetResponsiveFontVariants();

  return (
    <NextLink href={`${ERoutes.CaseStudies}/${id}`} passHref>
      <Stack
        className="fadeIn"
        gap={1}
        component={Link}
        underline="none"
        color="grey.900"
        sx={{
          transition: theme.transitions.create('all', {
            duration: theme.transitions.duration.short,
          }),
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      >
        <Box
          component="article"
          position="relative"
          width={1}
          sx={{ aspectRatio: { xs: '39 / 25', md: '33 / 25', lg: '23 / 15' } }}
          mb={{ xs: 1, lg: 2 }}
        >
          <Image
            src={previewUrl || imgUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        {!!categories.length && (
          <Stack alignSelf="flex-start" gap={1} direction="row" flexWrap="wrap">
            {categories.map((item, index) => (
              <Chip key={index} label={item} size="small" />
            ))}
          </Stack>
        )}
        <Typography
          component="h2"
          variant={getResponsiveFonts({ medium: 'h5', large: 'h4' })}
        >
          {title}
        </Typography>
      </Stack>
    </NextLink>
  );
}
