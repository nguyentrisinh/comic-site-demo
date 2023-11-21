import { FC, PropsWithChildren } from 'react';

export type TitleProps = PropsWithChildren<{}>;

const Title: FC<TitleProps> = ({ children }) => {
  return <h1 className="text-2xl text-white pt-4">{children}</h1>;
};

export default Title;
