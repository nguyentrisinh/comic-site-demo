import { ReactNode, RefObject } from 'react';
import { Swiper } from 'swiper';
import { SwiperSlideProps } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

type Kebab<T extends string, A extends string = ''> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
  : A;

/**
 * Helper for converting object keys to kebab case because Swiper web components parameters are available as kebab-case attributes.
 * @link https://swiperjs.com/element#parameters-as-attributes
 */
type KebabObjectKeys<T> = {
  [key in keyof T as Kebab<key & string>]: T[key] extends object ? KebabObjectKeys<T[key]> : T[key];
};

/**
 * Swiper 9 doesn't support Typescript yet, we are watching the following issue:
 * @link https://github.com/nolimits4web/swiper/issues/6466
 *
 * All parameters can be found on the following page:
 * @link https://swiperjs.com/swiper-api#parameters
 */
type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': SwiperContainerAttributes;
      'swiper-slide': SwiperSlideAttributes;
    }

    interface SwiperContainerAttributes extends KebabObjectKeys<SwiperOptions> {
      ref?: RefObject<SwiperRef>;
      children?: ReactNode;
      class?: string;
    }

    interface SwiperSlideAttributes
      extends KebabObjectKeys<SwiperSlideProps>,
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
      class?: string;
    }
  }
}
