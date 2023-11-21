export type TComic = {
  id: string;
  name: string;
  cover: {
    image: {
      id: string;
      url: string;
    };
  };
  comicNumber: string;
  startYear: number;
  storePrice: string;
  totalAvailable: number;
  likeCount: number;
  commentCount: number;
  description: string;
};

export type TComicResponse = {
  edges: { node: TComic }[];
};
