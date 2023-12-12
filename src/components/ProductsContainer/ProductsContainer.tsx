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

  const { categories, priceMin, priceMax, manufacturers, sort, page, limit } = useAppSelector((state) => state.filters);
  const filteredProducts = useAppSelector(state => state.products.filteredProducts);
  const [filteredPageProducts, setFilteredPageProduct] = useState(filteredProducts);

  const { isLoading, data: fetchFilteredPageProducts, isError } = useGetProductsQuery({ priceMin, priceMax, categories, manufacturers, sort, page, limit });
  console.log('fetchFilteredPageProducts', fetchFilteredPageProducts);

  useEffect(() => {
    if (fetchFilteredPageProducts && fetchFilteredPageProducts.length) {
      setFilteredPageProduct(fetchFilteredPageProducts);
      console.log('filteredPageProducts', filteredPageProducts);
    } else {
      setFilteredPageProduct([]);
    }

  }, [fetchFilteredPageProducts?.length, fetchFilteredPageProducts]);

  // const [fetchPageProducts, { isLoading, data: fetchFilteredPageProducts, isError }] = productsApi.useLazyGetProductsQuery();

  // const fetchData = async () => {
  //   await fetchPageProducts({ priceMin, priceMax, categories, manufacturers, sort, page, limit });
  //   console.log('filteredProducts page', fetchFilteredPageProducts, 'isLoading', isLoading, 'isError', isError);

  //   if (fetchFilteredPageProducts && fetchFilteredPageProducts.length) {
  //     setFilteredPageProduct(fetchFilteredPageProducts);
  //     setFilteredPageProduct(fetchFilteredPageProducts);
  //   } else {
  //     setFilteredPageProduct([]);
  //   }
  // }

  // useEffect(() => {
  //   setFilteredPageProduct(filteredProducts);
  // }, [filteredProducts]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchFilteredPageProducts, priceMin, priceMax, categories, manufacturers, sort, page, limit]);

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
