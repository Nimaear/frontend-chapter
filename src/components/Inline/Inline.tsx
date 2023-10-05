import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from 'react';

import { inline } from './Inline.css';

type Props<T extends ElementType> = {
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  as?: T;
};

export function Inline<T extends ElementType = 'div'>({ children, className, size = 'medium', as, ...rest }: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = as || 'div';
  return (
    <Component className={[className, inline({ size })].filter(Boolean).join(' ')} {...rest}>
      {children}
    </Component>
  );
}
