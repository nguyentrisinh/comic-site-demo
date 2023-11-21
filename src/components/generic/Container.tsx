import { FC, PropsWithChildren } from 'react';

export type ContainerProps = PropsWithChildren<{}>;

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
