import React from 'react';

import { grid } from './Grid.css';

export type GridProps = {
  children?: React.ReactNode;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({ children, className, ...rest }) => {
  return (
    <div className={[grid, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
};
