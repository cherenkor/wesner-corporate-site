import { Link, Stack, SxProps } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { IMainNavItem } from 'models/configs/main-nav.config';
import NextLink from 'next/link';

interface IMobileNavCollapse {
  item: IMainNavItem;
  onClose(): void;
  linkStyles?: SxProps;
}

export default function MobileNavigationCollapse({
  item,
  linkStyles,
  onClose,
}: IMobileNavCollapse): JSX.Element {
  const { name, children } = item;

  return (
    <Accordion sx={{ boxShadow: 'none', p: 0, background: 'transparent' }}>
      <AccordionSummary
        sx={{ ...linkStyles, m: 0, p: 0, width: 1, background: 'transparent' }}
      >
        {name}
      </AccordionSummary>
      <AccordionDetails>
        <Stack gap={1}>
          {children?.map(({ name, path }) => (
            <NextLink key={name} href={path} passHref={true}>
              <Link sx={linkStyles} onClick={onClose}>
                {name}
              </Link>
            </NextLink>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
