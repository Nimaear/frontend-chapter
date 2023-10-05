import type { FC } from 'react';

import { Inline } from './Inline/Inline';
import { ProductCard } from './ProductCard/ProductCard';
import type { ProductCardProps } from './ProductCard/ProductCardRoot';

export const Tele2Card: FC<ProductCardProps> = ({ className, product }) => {
  return (
    <ProductCard.Root product={product} className={className}>
      <ProductCard.Image />
      <Inline as={ProductCard.Content}>
        <ProductCard.Title />
        <ProductCard.Colors vertical />
      </Inline>
    </ProductCard.Root>
  );
};
