import { FC, PropsWithChildren } from 'react';

import Button from '@/components/generic/Button';
import Icon, { IconProps } from '@/components/generic/Icon';

export type IconButtonProps = PropsWithChildren<{
  icon: IconProps['name'];
}>;

const IconButton: FC<IconButtonProps> = ({ children, icon }) => {
  return (
    <Button className="flex items-center justify-center gap-x-2 hover:cursor-pointer">
      <Icon name={icon} />
      {children && <div>{children}</div>}
    </Button>
  );
};

export default IconButton;
