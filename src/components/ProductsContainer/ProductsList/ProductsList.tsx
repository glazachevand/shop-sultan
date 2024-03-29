import { IProduct } from "types/products";
import { classNames } from "utils/classNames/classNames";

import cls from "./ProductsList.module.scss";
import { ProductShort } from "../ProductShort/ProductShort";

interface ProductsListProps {
  className?: string;
  products: IProduct[];
}

export const ProductsList = (props: ProductsListProps) => {
  const { className, products } = props;

  return (
    <div className={classNames(cls.productsList, {}, [className])} data-testid="productList">
      {products?.map((product) => (
        <ProductShort key={product.id} product={product} />
      ))}
    </div>
  );
};