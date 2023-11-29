import { classNames } from "utils/classNames/classNames";
import cls from "./ProductsList.module.scss";
import data from '../../data/data.json';
import { ProductShort } from "./ProductShort/ProductShort";
import { Product } from "types/products";

interface ProductsListProps {
  className?: string;
}

export const ProductsList = (props: ProductsListProps) => {
  const { className } = props;
  const products = data.products as Product[];

  return (
    <div className={classNames(cls.productsList, {}, [className])}>
      {products.length ?
        products.map((product) => (
          <ProductShort key={product.id} product={product} />
        ))
        : <h2 className="title2">Ничего не найдено <span>😕</span></h2>}
    </div>
  );
};