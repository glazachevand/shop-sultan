import { classNames } from "utils/classNames/classNames";
import cls from "./ProductsList.module.scss";
import { ProductShort } from "../ProductShort/ProductShort";
import { useAppSelector } from "hooks/redux";
import { IProduct } from "types/products";

interface ProductsListProps {
  className?: string;
  products: IProduct[];
}

export const ProductsList = (props: ProductsListProps) => {
  const { className, products } = props;

  return (
    <div className={classNames(cls.productsList, {}, [className])}>
      {products?.map((product) => (
        <ProductShort key={product.id} product={product} />
      ))}
    </div>
  );
};