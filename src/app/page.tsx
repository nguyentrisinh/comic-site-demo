import { FC } from 'react';

import BrandsCarousel from '@/components/BrandsCarousel';
import ComicsCarousel from '@/components/ComicsCarousel';

export type PageProps = {};

const Page: FC<PageProps> = ({}) => {
  return (
    <div className="flex flex-col gap-y-12">
      <ComicsCarousel />
      <BrandsCarousel />
    </div>
  );
};

export default Page;
