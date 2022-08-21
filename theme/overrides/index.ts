import { Theme } from '@mui/material';
import Container from './Container';

export function overrides(theme: Theme) {
  return Object.assign(Container(theme));
}
