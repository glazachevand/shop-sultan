import { IProduct } from "types/products";

export const getManufactures = (products: IProduct[]) => {
  const newMap = new Map();
  products.forEach((product) => {
    if (newMap.has(product.manufacturer)) {
      newMap.set(product.manufacturer, newMap.get(product.manufacturer) + 1);
    } else {
      newMap.set(product.manufacturer, 1);
    }
  });
  const arr = Array.from(newMap.entries()).sort((a, b) => b[1] - a[1]);

  return arr;
};
