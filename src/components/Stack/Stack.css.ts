import { recipe } from '@vanilla-extract/recipes';

import { createVar } from '@vanilla-extract/css';

export const stackSize = createVar();

export const stack = recipe({
  base: {
    flexDirection: 'column',
    position: 'relative',
    display: 'flex',
    flexGrow: 1
  },
  variants: {
    size: {
      small: {
        gap: '0.5rem'
      },
      medium: {
        gap: '1rem'
      },
      large: {
        gap: '2rem'
      }
    }
  },
  defaultVariants: {
    size: 'medium'
  }
});
