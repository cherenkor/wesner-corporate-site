import { Link } from '@mui/material';
import { IMainNavItem } from 'models/configs/main-nav.config';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MobileNavigationCollapse from './mobile-navigation-collapse';
import { useGenerateMobileLinkStyles } from 'utils/hooks/generateMobileLinkStyles';

interface IMobileNavItem {
  item: IMainNavItem;
  onClose(): void;
}

export default function MobileNavigationItem({
  item,
  onClose,
}: IMobileNavItem): JSX.Element {
  const router = useRouter();
  const isActive = router.pathname.includes(item.path);
  const { name, path, children } = item;
  const getLinkStyles = useGenerateMobileLinkStyles();

  return (
    <>
      {!!children?.length ? (
        <MobileNavigationCollapse
          item={item}
          linkStyles={() => getLinkStyles(isActive)}
          onClose={onClose}
        />
      ) : (
        <NextLink href={path} passHref={!children?.length}>
          <Link sx={getLinkStyles(isActive)} onClick={onClose}>
            {name}
          </Link>
        </NextLink>
      )}
    </>
  );
}
