import { Theme } from '@mui/material';
import Button from './Button';
import Card from './Card';
import Chip from './Chip';
import Container from './Container';
import Divider from './Divider';
import Input from './Input';
import Menu from './Menu';
import Pagination from './Pagination';

export function overrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Card(theme),
    Chip(theme),
    Container(theme),
    Divider(theme),
    Input(theme),
    Menu(theme),
    Pagination(theme),
  );
}
