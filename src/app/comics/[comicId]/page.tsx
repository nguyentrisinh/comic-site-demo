import { FC } from 'react';

import ComicPage from '@/components/ComicPage';
import { getComics } from '@/services/api';

type PageParams = {
  comicId: string;
};

type PageProps = {
  params: PageParams;
};

export const generateStaticParams = async () => {
  const posts = await getComics();

  return posts.edges.map(({ node: comic }) => ({
    comicId: comic.id,
  }));
};

const Page: FC<PageProps> = ({ params }: PageProps) => {
  return <ComicPage comicId={params.comicId} />;
};

export default Page;
