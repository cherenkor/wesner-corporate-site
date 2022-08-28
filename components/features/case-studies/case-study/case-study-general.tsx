import { Box, Stack, Typography } from '@mui/material';
import { ICaseStudyMainInfo } from 'models/interfaces/case-strudies/case-studies.interface';
import Image from 'next/image';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface IProps {
  generalInfo: ICaseStudyMainInfo;
}

export default function CaseStudyGeneral({ generalInfo }: IProps) {
  const { title, text, list, imgUrl } = generalInfo;
  const getFontVariants = useGetResponsiveFontVariants();
  const bodyVariant = getFontVariants({ medium: 'body2', large: 'body1' });

  return (
    <Stack gap={{ xs: 1, lg: 2 }}>
      <Typography
        component="h2"
        variant={getFontVariants({
          medium: 'h4',
          large: 'h3',
        })}
      >
        {title}
      </Typography>
      {!!text?.length && (
        <Stack gap={0.5}>
          {text.map((item, index) => (
            <Typography variant={bodyVariant} color="grey.800" key={index}>
              {item}
            </Typography>
          ))}
        </Stack>
      )}
      {!!list?.length && (
        <Box component="ul" sx={{ m: 0, pl: 3 }} color="grey.800">
          {list.map((item, index) => (
            <Typography variant={bodyVariant} component="li" key={index}>
              {item}
            </Typography>
          ))}
        </Box>
      )}
      {imgUrl && (
        <Box
          sx={{
            position: 'relative',
            width: 1,
            aspectRatio: '29 / 15',
            mt: { xs: 2, md: 4 },
          }}
        >
          <Image src={imgUrl} alt="" layout="fill" objectFit="cover" />
        </Box>
      )}
    </Stack>
  );
}
