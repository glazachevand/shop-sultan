import { Pagination } from "components/UI/Pagination/Pagination";
import { classNames } from "utils/classNames/classNames";
import cls from "./ProductsContainer.module.scss";
import { ProductsList } from "./ProductsList/ProductsList";
import { productsApi } from "services/products.api";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { setFilteredProducts } from "store/reducers/productsSlice";

interface ProductsContainerProps {
  className?: string;
}

export const ProductsContainer = (props: ProductsContainerProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { categories, priceMin, priceMax, manufacturers, sort, page, limit } = useAppSelector((state) => state.filters);

  const { data: allFilteredProducts } = productsApi.useGetProductsQuery({ priceMin, priceMax, categories, manufacturers, sort });
  const { isLoading, data: filteredProducts, isError } = productsApi.useGetProductsQuery({ priceMin, priceMax, categories, manufacturers, sort, page, limit });

  useEffect(() => {
    if (filteredProducts && filteredProducts.length) {
      dispatch(setFilteredProducts(filteredProducts));
      console.log('filteredProducts', filteredProducts);
    }
  }, [dispatch, filteredProducts?.length, filteredProducts]);

  return (
    <div className={classNames(cls.productsContainer, {}, [className])}>
      {isLoading && <p className="text-center">Loading...</p>}
      {isError && <h2 className={classNames(cls.productsTitle, {}, ["title2"])}>Ничего не найдено <span>😕</span></h2>}
      {filteredProducts && <ProductsList className={cls.products} />}
      {allFilteredProducts && <Pagination className={cls.pagination} productsCount={allFilteredProducts.length} />}
      <p className={cls.footer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis
        iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue
        mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
    </div>
  );
};
