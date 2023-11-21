import { TBrandResponse } from '@/models/Brand';
import { TComic, TComicResponse } from '@/models/Comic';

import brands from './data/brands.json';
import comics from './data/comics.json';
const sleep = (time: number) =>
  new Promise((rs) => {
    setTimeout(() => rs(''), time);
  });

export const getComics = async (): Promise<TComicResponse> => {
  await sleep(1000);
  return comics;
};

export const getBrands = async (): Promise<TBrandResponse> => {
  await sleep(1000);
  return brands;
};

export const getComic = async (comicId: string): Promise<TComic | undefined> => {
  await sleep(1000);
  return comics.edges.find(({ node: { id } }) => id === comicId)?.node || undefined;
};
