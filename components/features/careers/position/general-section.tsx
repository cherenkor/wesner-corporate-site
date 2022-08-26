import { Box, Stack, Typography } from '@mui/material';
import { IPositionSection } from 'models/interfaces/careers/position.interface';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface IProps {
  info: IPositionSection;
}

export default function InfoSection({ info }: IProps): JSX.Element {
  const { text, title, list } = info;
  const getFontVariants = useGetResponsiveFontVariants();
  const bodyVariant = getFontVariants({ medium: 'body2', large: 'body1' });

  return (
    <Stack component="section" gap={1}>
      <Typography variant={getFontVariants({ medium: 'h5', large: 'h4' })}>
        {title}
      </Typography>
      {text && (
        <Typography variant={bodyVariant} color="grey.800">
          {text}
        </Typography>
      )}
      {!!list?.length && (
        <Stack component="ul" gap={0.5} m={0} pl={3}>
          {list.map((item, index) => (
            <Typography
              component="li"
              key={index}
              variant={bodyVariant}
              color="grey.800"
            >
              {item}
            </Typography>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
