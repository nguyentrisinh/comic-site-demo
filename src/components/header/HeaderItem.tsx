import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import Icon, { IconProps } from '@/components/generic/Icon';

export type HeaderItemProps = PropsWithChildren<{
  icon: IconProps['name'];
}>;

const HeaderItem: FC<HeaderItemProps> = ({ icon, children }) => {
  return (
    <Link href="/">
      <button className="flex items-center text-lightGray gap-x-2 hover:cursor-pointer">
        <Icon name={icon} />
        {children}
      </button>
    </Link>
  );
};

export default HeaderItem;
