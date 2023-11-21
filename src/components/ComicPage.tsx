'use client';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

import Button from '@/components/generic/Button';
import Container from '@/components/generic/Container';
import Icon from '@/components/generic/Icon';
import IconButton from '@/components/generic/IconButton';
import { TComic } from '@/models/Comic';
import { getComic } from '@/services/api';

type ComicPageProps = {
  comicId: string;
};

const ComicPage: FC<ComicPageProps> = ({ comicId }) => {
  const [data, setData] = useState<TComic>();
  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    getComic(Array.isArray(comicId) ? comicId[0] : comicId).then(setData);
  }, []);

  if (!data) return null;

  return (
    <div>
      <div className="relative lg:py-12 py-4">
        <div
          className="blur-3xl absolute left-0 right-0 bottom-0 top-0 bg-cover -z-50"
          style={{
            backgroundImage: `url(${data.cover.image.url})`,
          }}
        />
        <Container>
          <div className="flex lg:flex-row w-full flex-col gap-3">
            <Link href="/">
              <IconButton icon="chevron-left" />
            </Link>
            <div className="flex-grow flex justify-center">
              <div className="relative aspect-[80/123] max-w-[450px] flex-grow">
                <Image src={data.cover.image.url} alt={data.name} fill />
              </div>
            </div>
            <div className="flex flex-col justify-between lg:items-end items-center gap-3">
              <div>
                <Button>
                  <div className="flex items-center text-white px-3 font-bold">
                    Comic Preview <Icon name="chevron-right" />
                  </div>
                </Button>
              </div>
              <div className="flex gap-x-3">
                <IconButton icon="heart">
                  <div className="font-bold">{data.likeCount}</div>
                </IconButton>
                <IconButton icon="comment">
                  <div className="font-bold">{data.commentCount}</div>
                </IconButton>
                <IconButton icon="save" />
                <IconButton icon="share" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#2C2C2C] py-10">
        <Container>
          <h1 className="text-4xl text-white text-bold">{data.name}</h1>
          <p
            className={classNames('text-[#9E9E9E] text-lg mt-8 max-w-[960px]', {
              'line-clamp-2': !showMore,
            })}
          >
            {data.description}
          </p>
          {!showMore && (
            <button
              className="text-myBlue font-bold mt-3"
              onClick={() => {
                setShowMore(true);
              }}
            >
              Show More
            </button>
          )}
        </Container>
      </div>
    </div>
  );
};

export default ComicPage;
