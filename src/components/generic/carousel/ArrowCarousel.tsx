import { FC, PropsWithChildren } from 'react';

import Carousel, { CarouselProps } from '@/components/generic/carousel/Carousel';

export type ArrowCarouselProps = CarouselProps & PropsWithChildren<{}>;

const ArrowCarousel: FC<ArrowCarouselProps> = ({ injectStylesUrls, children, ...props }) => {
  return (
    <Carousel injectStylesUrls={['/css/ArrowCarousel.css'].concat(injectStylesUrls || [])} {...props}>
      {children}
    </Carousel>
  );
};

export default ArrowCarousel;
