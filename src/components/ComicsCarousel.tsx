'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

import HomeCarousel from '@/components/HomeCarousel';
import { TComicResponse } from '@/models/Comic';
import { getComics } from '@/services/api';

export type ComicsCarouselProps = {};

const ComicsCarousel: FC<ComicsCarouselProps> = ({}) => {
  const [comics, setComics] = useState<TComicResponse>();
  useEffect(() => {
    getComics().then(setComics);
  }, []);
  if (!comics) return null;
  return (
    <HomeCarousel title="Comics">
      {comics.edges.map(({ node: comic }, index: number) => (
        <swiper-slide key={index}>
          <Link href={`/comics/${comic.id}`}>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative aspect-[80/123]">
                <Image src={comic.cover.image.url} alt={comic.name} fill />
              </div>
              <div className="bg-[#DEDEDE]">
                <div className="p-4 bg-white rounded-b-lg">
                  <div className="line-clamp-1">{comic.name}</div>
                </div>
                <div className="p-4 rounded-b-lg flex items-center justify-between">
                  <div>{comic.startYear}</div>
                  <div>
                    {comic.totalAvailable === 0 ? (
                      'Sold out'
                    ) : (
                      <div className="flex items-center gap-x-2">
                        <div className="rounded-full bg-green-700 w-4 h-4" />
                        {comic.storePrice}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </swiper-slide>
      ))}
    </HomeCarousel>
  );
};

export default ComicsCarousel;
