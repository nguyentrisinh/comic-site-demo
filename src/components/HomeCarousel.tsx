'use client';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

import ArrowCarousel, { ArrowCarouselProps } from '@/components/generic/carousel/ArrowCarousel';
import { CarouselProps } from '@/components/generic/carousel/Carousel';
import Container from '@/components/generic/Container';
import Title from '@/components/generic/Title';

export type HomeCarouselProps = ArrowCarouselProps & {
  title: string;
};

const breakpoints = {
  0: { slidesPerView: 2 },
  640: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
};

const defaultProps = {
  slidesPerView: 5,
  spaceBetween: 10,
};

const HomeCarousel: FC<HomeCarouselProps> = ({ children, title, ...props }) => {
  const [defaultConfig, setDefaultConfig] = useState<CarouselProps | undefined>(undefined);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const values = Object.entries(breakpoints)
      .sort(([aWidth], [bWidth]) => +bWidth - +aWidth)
      .find(([minWidth]) => windowWidth >= +minWidth);
    if (values) {
      setDefaultConfig({ ...defaultProps, ...values[1] });
    }
  }, []);

  if (!defaultConfig) return null;

  return (
    <div className="overflow-hidden">
      <Container>
        <Title>{title}</Title>
        <div className="pt-8">
          <div className="relative">
            <Link href={'/'} className="text-myBlue text-bold absolute -top-6 right-[104px] -translate-y-full">
              See all
            </Link>
            <ArrowCarousel navigation {...defaultConfig} breakpoints={breakpoints}>
              {children}
            </ArrowCarousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeCarousel;
