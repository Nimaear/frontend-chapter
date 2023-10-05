import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import { type Product, ProductContext } from './ProductCardContext';

import { productCard } from './ProductCard.css';

export type ProductCardProps = ComponentPropsWithoutRef<'a'> & {
  product: Product;
  children?: ReactNode;
}

export const ProductCardRoot: FC<ProductCardProps> = ({ product, children, className, ...rest }) => {
  return (
    <ProductContext.Provider value={product}>
      <a className={[productCard, className].filter(Boolean).join(' ')} href={product.url} {...rest}>
        {children}
      </a>
    </ProductContext.Provider>
  );
};
