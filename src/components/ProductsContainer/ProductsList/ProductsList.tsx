import { classNames } from "utils/classNames/classNames";
import cls from "./ProductsList.module.scss";
import { ProductShort } from "../ProductShort/ProductShort";
import { useAppSelector } from "hooks/redux";

interface ProductsListProps {
  className?: string;
}

export const ProductsList = (props: ProductsListProps) => {
  const { className } = props;
  const products = useAppSelector((state) => state.products.filteredProducts);

  return (
    <div className={classNames(cls.productsList, {}, [className])}>
      {products?.map((product) => (
        <ProductShort key={product.id} product={product} />
      ))}
    </div>
  );
};