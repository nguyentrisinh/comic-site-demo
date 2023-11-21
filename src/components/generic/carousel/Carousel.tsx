'use client';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

register();

export type CarouselProps = SwiperOptions & {
  className?: string;
};

const Carousel: FC<PropsWithChildren<CarouselProps>> = ({ children, className, ...props }) => {
  const swiperElRef = useRef<SwiperContainer>(null);

  useEffect(() => {
    const swiperEl = swiperElRef.current;
    if (swiperEl) {
      Object.assign(swiperEl, props);
      swiperEl.initialize();
    }
  }, []);

  return (
    <swiper-container init={false} ref={swiperElRef} class={className}>
      {children}
    </swiper-container>
  );
};

export default Carousel;
