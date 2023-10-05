import { recipe } from '@vanilla-extract/recipes';

export const inline = recipe({
  base: {
    display: 'flex'
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
