'use client';
import Link from 'next/link';
import { FC } from 'react';

import ArrowCarousel, { ArrowCarouselProps } from '@/components/generic/carousel/ArrowCarousel';
import Container from '@/components/generic/Container';
import Title from '@/components/generic/Title';

export type HomeCarouselProps = ArrowCarouselProps & {
  title: string;
};

const HomeCarousel: FC<HomeCarouselProps> = ({ children, title, ...props }) => {
  return (
    <div className="overflow-hidden">
      <Container>
        <Title>{title}</Title>
        <div className="pt-8">
          <div className="relative">
            <Link href={'/'} className="text-myBlue text-bold absolute -top-6 right-[104px] -translate-y-full">
              See all
            </Link>
            <ArrowCarousel {...props}>{children}</ArrowCarousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeCarousel;
