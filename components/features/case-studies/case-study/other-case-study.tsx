import { Box, Chip, Link, Stack, Typography, useTheme } from '@mui/material';
import { ERoutes } from 'models/enums/routes.enum';
import { ICaseStudy } from 'models/interfaces/case-strudies/case-studies.interface';
import Image from 'next/image';
import NextLink from 'next/link';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface IProps {
  caseStudy: ICaseStudy;
}

export default function OtherCaseStudy({ caseStudy }: IProps): JSX.Element {
  const theme = useTheme();
  const { title, categories, imgUrl, previewUrl, id } = caseStudy;
  const getResponsiveFonts = useGetResponsiveFontVariants();

  return (
    <NextLink href={`${ERoutes.CaseStudies}/${id}`} passHref>
      <Stack
        gap={1}
        component={Link}
        underline="none"
        color="grey.300"
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
          sx={{ aspectRatio: '23 / 11' }}
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
              <Chip
                key={index}
                label={item}
                size="small"
                sx={{
                  bgcolor: theme.palette.grey[100],
                  color: theme.palette.grey[300],
                }}
              />
            ))}
          </Stack>
        )}
        <Typography
          component="h3"
          variant={getResponsiveFonts({ medium: 'h5', large: 'h4' })}
        >
          {title}
        </Typography>
      </Stack>
    </NextLink>
  );
}
