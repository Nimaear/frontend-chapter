import { type FC, type ReactNode } from 'react';

import { productCardContent } from './ProductCard.css';

type Props = {
  children?: ReactNode;
  className?: string;
}

export const ProductCardContent: FC<Props> = ({
  children,
  className,
  ...rest
}) => {
  return <div className={[productCardContent, className].filter(Boolean).join(' ')} {...rest}>{children}</div>;
};
