import Image from 'next/image';
import { FC } from 'react';

export type IconProps = {
  name: string;
};

const Icon: FC<IconProps> = ({ name }) => {
  return <Image src={`/images/icons/${name}.png`} alt={name} width={24} height={24} />;
};

export default Icon;
