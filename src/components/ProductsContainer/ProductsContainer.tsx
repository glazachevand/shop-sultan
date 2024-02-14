import { useEffect, useState } from "react";

import { Loader } from "components/UI/Loader/Loader";
import { Pagination } from "components/UI/Pagination/Pagination";
import { useAppSelector } from "hooks/redux";
import { useTranslation } from 'react-i18next';
import { useGetProductsQuery } from "services/products.api";
import { IProduct } from "types/products";
import { classNames } from "utils/classNames/classNames";

import cls from "./ProductsContainer.module.scss";
import { ProductsList } from "./ProductsList/ProductsList";

interface ProductsContainerProps {
  className?: string;
}

export const ProductsContainer = (props: ProductsContainerProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { typecare, priceMin, priceMax, manufacturers, sort, page, limit } = useAppSelector((state) => state.filters);
  const [filteredPageProducts, setFilteredPageProduct] = useState<IProduct[]>([]);
  const { isLoading, data: fetchFilteredPageProducts, isError } = useGetProductsQuery({ priceMin, priceMax, typecare, manufacturers, sort, page, limit });

  useEffect(() => {
    if (fetchFilteredPageProducts && fetchFilteredPageProducts.length) {
      setFilteredPageProduct(fetchFilteredPageProducts);
    } else {
      setFilteredPageProduct([]);
    }

  }, [fetchFilteredPageProducts?.length, fetchFilteredPageProducts]);

  return (
    <div className={classNames(cls.productsContainer, {}, [className])} data-testid="productsContainer">
      {isLoading ? (
        <div className="text-center"><Loader /></div>
      ) : isError ? (
        <h2 className={classNames(cls.productsTitle, {}, ["title2"])}>{t('messages.load_error')} <span>😕</span></h2>
      ) : !filteredPageProducts.length ? (
        <h2 className={classNames(cls.productsTitle, {}, ["title2"])}>{t('messages.not_found')} <span>😕</span></h2>
      ) : (
        <>
          <ProductsList products={filteredPageProducts} className={cls.products} />
          <Pagination className={cls.pagination} />
        </>
      )}
      <p className={cls.footer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis
        iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue
        mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
      </p>
    </div >
  );
};
