import { recipe } from '@vanilla-extract/recipes';

import { globalVars } from '../../globalTheme.css';
import { fallbackVar, style } from '@vanilla-extract/css';

export const productCard = style({
  borderRadius: fallbackVar(globalVars.borderRadius, '8px'),
  boxShadow: fallbackVar(globalVars.boxShadow, '0 0 8px rgba(0, 0, 0, 0.1)'),
  overflow: 'hidden',
  border: fallbackVar(globalVars.border),
  fontFamily: '\'Nunito Sans\', sans-serif'
});

export const productCardColorContainer = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    gap: globalVars.productCard.colorDot.spacing
  },
  variants: {
    vertical: {
      true: {
        flexDirection: 'column'
      }
    }
  }
});

export const productCardColorDot = style({
  display: 'flex',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: globalVars.productCard.colorDot.borderRadius
});

export const productCardImage = style({
  width: '100%',
  aspectRatio: globalVars.productCard.image.aspectRatio,
  objectFit: 'cover',
  objectPosition: 'top center',
  display: 'block'
});

export const productCardContent = style({
  padding: '16px'
});

export const productCardTitle = style({
  margin: 0,
  padding: 0,
  fontSize: '2rem',
  fontWeight: 'bold',
  flexGrow: 1,
  flexShrink: 0,
  lineHeight: 1
});
