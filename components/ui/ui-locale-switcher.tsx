import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Link, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import { localesConfig } from 'models/configs/locales.config';
import Image from 'next/image';

export const LocaleSwitcher = () => {
  const { locales, route, locale } = useRouter();
  const theme = useTheme();

  return (
    <Stack direction="row" gap={2}>
      {localesConfig.map(({ name, img }) => (
        <NextLink key={name} href={route} locale={name}>
          <Link
            component="button"
            sx={{
              display: 'inline-flex',
              outline: '1px solid',
              outlineColor:
                locale === name ? theme.palette.secondary.main : 'transparent',
              outlineOffset: 2,
              borderRadius: 1,
            }}
          >
            <Image src={img} alt={name} width={24} height={16} />
          </Link>
        </NextLink>
      ))}
    </Stack>
  );
};
