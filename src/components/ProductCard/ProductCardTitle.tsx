import { type ComponentPropsWithoutRef, type ElementType, useContext } from 'react';

import { ProductContext } from './ProductCardContext';

import { productCardTitle } from './ProductCard.css';

type Props<T extends ElementType> = {
  as?: T;
  className?: string;
}

export function ProductCardTitle<T extends ElementType = 'h2'>({
  as,
  className,
  ...props
}:
  Props<T>
  & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) {
  const { title } = useContext(ProductContext);
  const Component = as || 'h2';
  return <Component {...props} class={[className, productCardTitle].filter(Boolean).join(' ')}>{title}</Component>;
}
