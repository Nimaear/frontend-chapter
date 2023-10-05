import { createContext } from 'react';

export type Tele2Product = {
  image: string;
  title: string;
  colors: string[];
  url: string;
}

export type ComviqProduct = {
  title: string;
  colors: string[];
  url: string;
}

export type Product = Tele2Product | ComviqProduct;

export const isTele2Product = (b: Product): b is Tele2Product => {
  return (b as Tele2Product).image !== undefined;
};

export const ProductContext = createContext<Product>({
  image: '',
  title: '',
  colors: [],
  url: ''
});
