'use client';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { FC, useState } from 'react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
            <div className="items-center gap-x-8 hidden lg:flex">
              {menuItemList.map(({ icon, label }) => (
                <HeaderItem key={label} icon={icon}>
                  {label}
                </HeaderItem>
              ))}
            </div>
            <div className="flex items-center gap-x-4">
              <IconButton icon="bell" />
              <IconButton icon="search" />
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </nav>
        </header>
      </Container>
      <Dialog as="div" className="lg:hidden z-50 relative" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-mediumGray px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <button className="text-white absolute right-4 top-4" onClick={() => setMobileMenuOpen(false)}>
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          {menuItemList.map(({ icon, label }) => (
            <HeaderItem className="py-3" key={label} icon={icon}>
              {label}
            </HeaderItem>
          ))}
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Header;
