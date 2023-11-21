import classNames from 'classnames';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import Icon, { IconProps } from '@/components/generic/Icon';

export type HeaderItemProps = PropsWithChildren<{
  icon: IconProps['name'];
  className?: string;
}>;

const HeaderItem: FC<HeaderItemProps> = ({ icon, children, className }) => {
  return (
    <Link href="/">
      <button className={classNames('flex items-center text-lightGray gap-x-2 hover:cursor-pointer', className)}>
        <Icon name={icon} />
        {children}
      </button>
    </Link>
  );
};

export default HeaderItem;
