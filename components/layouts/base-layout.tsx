import { LocaleSwitcher } from '@components/ui/ui-locale-switcher';
import { PropsWithChildren } from 'react';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div>
        <LocaleSwitcher />
      </div>
      <div>{children}</div>
    </div>
  );
};
