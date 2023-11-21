import { FC, PropsWithChildren } from 'react';

export type BadgeProps = PropsWithChildren<{}>;

const Badge: FC<BadgeProps> = ({ children }) => {
  return <div className="py-0.5 px-1 bg-[#424242] text-[8px] text-[#B8B9B8] rounded">{children}</div>;
};

export default Badge;
