import { Theme } from '@mui/material';
import Button from './Button';
import Card from './Card';
import Container from './Container';

export function overrides(theme: Theme) {
  return Object.assign(Button(theme), Card(theme), Container(theme));
}
