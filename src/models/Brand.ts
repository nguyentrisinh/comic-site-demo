export type TBrand = {
  id: string;
  name: string;
  image: {
    url: string;
  };
};

export type TBrandResponse = {
  edges: { node: TBrand }[];
};
