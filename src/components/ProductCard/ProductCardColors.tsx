import { type FC, useContext } from 'react';

import { ProductContext } from './ProductCardContext';

import { productCardColorContainer, productCardColorDot } from './ProductCard.css';

type Props = {
  className?: string;
  vertical?: boolean;
}

export const ProductCardColors: FC<Props> = ({
  className,
  vertical
}) => {
  const { colors } = useContext(ProductContext);
  return (
    <div className={[productCardColorContainer({
      vertical
    }), className].filter(Boolean).join(' ')}
    >
      {colors.map((color) => (
        <div key={color} className={productCardColorDot} style={{ backgroundColor: color }} />
      ))}
    </div>
  );
};
