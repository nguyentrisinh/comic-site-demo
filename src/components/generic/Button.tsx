import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  className?: JSX.IntrinsicElements['div']['className'];
}>;

const Button: FC<ButtonProps> = ({ children, className }) => {
  return <button className={classNames('p-2 rounded bg-mediumGray text-white', className)}>{children}</button>;
};

export default Button;
