import './global.css';

import classNames from 'classnames';
import { Poppins } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/header/Header';
export const metadata = {
  title: 'Comic',
  description: 'Comic',
};

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={classNames(poppins.className, 'bg-backgroundGray')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
