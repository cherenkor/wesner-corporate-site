import { Link } from '@mui/material';

export const WebSiteLink = (): JSX.Element => {
  return (
    <Link
      href="https://wesner-software.com"
      target="_blank"
      underline="hover"
      sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}
    >
      https://wesner-software.com
    </Link>
  );
};

export const MailToLink = (): JSX.Element => {
  return (
    <Link
      href="mailto:support@wesner-software.de"
      target="_blank"
      underline="hover"
      sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}
    >
      contact us
    </Link>
  );
};
