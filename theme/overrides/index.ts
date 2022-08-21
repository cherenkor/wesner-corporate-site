import { Theme } from '@mui/material';
import Button from './Button';
import Container from './Container';

export function overrides(theme: Theme) {
  return Object.assign(Button(theme), Container(theme));
}
