import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';

interface IProps {
  icon?: JSX.Element;
  name: string;
}

export default function PositionItem({ icon, name }: IProps): JSX.Element {
  const getFontVariants = useGetResponsiveFontVariants();

  return (
    <Stack direction="row" gap={1} color="primary.main" alignItems="center">
      {icon}
      <Typography
        color="grey.900"
        variant={getFontVariants({ medium: 'body1', large: 'subtitle1' })}
      >
        {name}
      </Typography>
    </Stack>
  );
}
