import { Product } from './product.model';

export const products: Array<Product> = [];

export const addProduct = (product: Product) => {
  products.push(product);
};

export const getTotalStock = (): number => {
  return products.reduce((acc, { stock }) => (acc += stock), 0);
};
