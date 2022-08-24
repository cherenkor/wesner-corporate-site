import { Link, Stack, SxProps } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { IMainNavItem } from 'models/configs/main-nav.config';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useGenerateMobileLinkStyles } from 'utils/hooks/generateMobileLinkStyles';

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
  const router = useRouter();
  const { name, children } = item;
  const isActive = router.pathname.includes(item.path);

  const getLinkStyles = useGenerateMobileLinkStyles();

  return (
    <Accordion sx={{ boxShadow: 'none', p: 0, background: 'transparent' }}>
      <AccordionSummary
        sx={{
          ...getLinkStyles(isActive),
          m: 0,
          p: 0,
          width: 1,
          background: 'transparent',
        }}
      >
        {name}
      </AccordionSummary>
      <AccordionDetails>
        <Stack gap={1}>
          {children?.map(({ name, path }) => {
            const isChildActive = router.asPath.includes(path);
            return (
              <NextLink key={name} href={path} passHref={true}>
                <Link sx={getLinkStyles(isChildActive)} onClick={onClose}>
                  {name}
                </Link>
              </NextLink>
            );
          })}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
