'use client';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

import HomeCarousel from '@/components/HomeCarousel';
import { TBrandResponse } from '@/models/Brand';
import { getBrands } from '@/services/api';

export type BrandsCarouselProps = {};

const BrandsCarousel: FC<BrandsCarouselProps> = ({}) => {
  const [comics, setBrands] = useState<TBrandResponse>();
  useEffect(() => {
    getBrands().then(setBrands);
  }, []);
  if (!comics) return null;
  return (
    <HomeCarousel title="Brands" navigation slidesPerView={5} spaceBetween={20}>
      {comics.edges.map(({ node: brand }, index: number) => (
        <swiper-slide key={index}>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src={brand.image.url} alt={brand.name} fill />
          </div>
        </swiper-slide>
      ))}
    </HomeCarousel>
  );
};

export default BrandsCarousel;
