import { Pagination } from "components/UI/Pagination/Pagination";
import { classNames } from "utils/classNames/classNames";
import cls from "./ProductsContainer.module.scss";
import { ProductsList } from "./ProductsList/ProductsList";
import { useGetProductsQuery } from "services/products.api";
import { useEffect, useState } from "react";
import { useAppSelector } from "hooks/redux";

interface ProductsContainerProps {
  className?: string;
}

export const ProductsContainer = (props: ProductsContainerProps) => {
  const { className } = props;

  const { typecare, priceMin, priceMax, manufacturers, sort, page, limit } = useAppSelector((state) => state.filters);
  const filteredProducts = useAppSelector(state => state.products.filteredProducts);
  const [filteredPageProducts, setFilteredPageProduct] = useState(filteredProducts);

  const { isLoading, data: fetchFilteredPageProducts, isError } = useGetProductsQuery({ priceMin, priceMax, typecare, manufacturers, sort, page, limit });

  useEffect(() => {
    if (fetchFilteredPageProducts && fetchFilteredPageProducts.length) {
      setFilteredPageProduct(fetchFilteredPageProducts);
    } else {
      setFilteredPageProduct([]);
    }

  }, [fetchFilteredPageProducts?.length, fetchFilteredPageProducts]);

  return (
    <div className={classNames(cls.productsContainer, {}, [className])}>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : isError ? (
        <h2 className={classNames(cls.productsTitle, {}, ["title2"])}>Ошибка при загрузке с сервера <span>😕</span></h2>
      ) : !filteredPageProducts.length ? (
        <h2 className={classNames(cls.productsTitle, {}, ["title2"])}>Ничего не найдено <span>😕</span></h2>
      ) : (
        <>
          <ProductsList products={filteredPageProducts} className={cls.products} />
          <Pagination className={cls.pagination} productsCount={filteredProducts.length} />
        </>
      )}
      <p className={cls.footer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis
        iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue
        mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
      </p>
    </div >
  );
};
