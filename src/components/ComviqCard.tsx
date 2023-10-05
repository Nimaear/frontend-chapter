import type { FC } from 'react';

import { ProductCard } from './ProductCard/ProductCard';
import type { ProductCardProps } from './ProductCard/ProductCardRoot';
import { Stack } from './Stack/Stack';

export const ComviqCard: FC<ProductCardProps> = (props) => {
  return (
    <ProductCard.Root product={props.product} className={props.className}>
      <ProductCard.Image />
      <Stack as={ProductCard.Content}>
        <ProductCard.Title />
        <ProductCard.Colors />
      </Stack>
    </ProductCard.Root>
  );
};
