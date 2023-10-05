import { type FC, useContext } from 'react';

import { isTele2Product, ProductContext } from './ProductCardContext';

import { productCardImage } from './ProductCard.css';

type Props = {
  className?: string;
}

export const ProductCardImage: FC<Props> = ({
  className
}) => {
  const product = useContext(ProductContext);
  if (!isTele2Product(product)) return null;
  return <img src={product.image} className={[productCardImage, className].filter(Boolean).join(' ')} />;
};
