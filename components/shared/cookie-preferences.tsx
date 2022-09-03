import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { CloseIcon } from './icons';

interface IProps {
  isGoogleChecked: boolean;
  onClose(): void;
  onCancel(): void;
  onAccept(value: boolean): void;
}

export default function CookiePreferences({
  isGoogleChecked,
  onClose,
  onCancel,
  onAccept,
}: IProps): JSX.Element {
  const [isChecked, setIsChecked] = useState(isGoogleChecked);

  return (
    <Stack direction="column" gap={1}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width={1}
      >
        <Typography component="div" variant="h4">
          Cookie Preferences
        </Typography>
        <IconButton color="inherit" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Divider sx={{ mt: 1 }} />
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle1" color="grey.800">
          Google Analytics
        </Typography>
        <Checkbox
          checked={isChecked}
          onChange={(value) => setIsChecked(value.target.checked)}
        />
      </Stack>
      <Divider sx={{ mb: 2 }} />

      <Stack width={1} direction="row" justifyContent="flex-end" mt={1}>
        <Stack direction="row" gap={1}>
          <Button variant="text" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={() => onAccept(isChecked)}>
            Save
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
