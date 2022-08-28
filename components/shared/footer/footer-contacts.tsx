import { Link, Typography, useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import React, { useMemo } from 'react';
import {
  FacebookIcon,
  PhoneIcon,
  TwitterIcon,
  LinkedInIcon,
} from 'components/shared/icons';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useTranslations } from 'next-intl';

const socialIconsStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: { xs: 48, md: 24 },
  height: { xs: 48, md: 24 },
  borderRadius: 1,
  backgroundColor: 'grey.100',
};

export default function FooterContacts(): JSX.Element {
  const t = useTranslations();
  const theme = useTheme();
  const linkStyles = useMemo(
    () => ({
      color: theme.palette.grey[200],
      typography: theme.typography.body2,
      fontSize: { xs: 14, lg: 16 },
      transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.shortest,
      }),
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.grey[300],
      },
    }),
    [theme],
  );
  return (
    <Stack gap={1}>
      <Typography component="div" variant="h6">
        {t('footer.contacts')}
      </Typography>
      <Stack direction="row" alignItems="center" gap={1}>
        <MailOutlineIcon sx={{ fontSize: 18 }} />
        <Link href="mailto:support@wesner-software.de" sx={{ ...linkStyles }}>
          support@wesner-software.de
        </Link>
      </Stack>
      <Stack direction="row" alignItems="center" gap={1}>
        <PhoneIcon sx={{ fontSize: 16 }} />
        <Link href="tel:+4915140530312" sx={{ ...linkStyles }}>
          +49 (151) -40 53 03 12
        </Link>
      </Stack>
      <Stack direction="row" gap={1}>
        <Link
          href="https://facebook.com"
          target="_blank"
          sx={socialIconsStyles}
          aria-label="facebook in page"
        >
          <FacebookIcon sx={{ fontSize: 16 }} />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          sx={socialIconsStyles}
          aria-label="twitter in page"
        >
          <TwitterIcon sx={{ fontSize: 16 }} />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          sx={socialIconsStyles}
          aria-label="linked in page"
        >
          <LinkedInIcon sx={{ fontSize: 16 }} />
        </Link>
      </Stack>
    </Stack>
  );
}
