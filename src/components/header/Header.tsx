import Image from 'next/image';
import { FC } from 'react';

import Badge from '@/components/generic/Badge';
import Container from '@/components/generic/Container';
import IconButton from '@/components/generic/IconButton';
import HeaderItem from '@/components/header/HeaderItem';

export type HeaderProps = {};

const menuItemList: {
  icon: string;
  label: string;
}[] = [
  {
    icon: 'store',
    label: 'Store',
  },
  {
    icon: 'collection',
    label: 'Collection',
  },
  {
    icon: 'feed',
    label: 'Feed',
  },
  {
    icon: 'market',
    label: 'Market',
  },
  {
    icon: 'profile',
    label: 'Profile',
  },
];

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="bg-black py-5 fixed top-0 right-0 left-0 [&+*]:mt-[80px] z-50">
      <Container>
        <header>
          <nav className="flex justify-between items-center">
            <div className="relative inline-block">
              <Image src="/images/logo.png" alt="Logo" width={128} height={32} />
              <div className="absolute -right-1 top-0 translate-x-full">
                <Badge>BETA</Badge>
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              {menuItemList.map(({ icon, label }) => (
                <HeaderItem key={label} icon={icon}>
                  {label}
                </HeaderItem>
              ))}
            </div>
            <div className="flex items-center gap-x-4">
              <IconButton icon="bell" />
              <IconButton icon="search" />
            </div>
          </nav>
        </header>
      </Container>
    </div>
  );
};

export default Header;
