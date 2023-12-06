import { Breadcrumbs } from 'components/UI/Breadcrumbs/Breadcrumbs';
import { CategoryMenu } from 'components/UI/CategoryMenu/CategoryMenu';
import { FC, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import cls from './CatalogPage.module.scss';
import { Parameters } from 'components/Parameters/Parameters';
import { BackButton } from 'components/UI/BackButton/BackButton';
import { Sort } from 'components/UI/Sort/Sort';
import { ProductsContainer } from 'components/ProductsContainer/ProductsContainer';
import { productsApi } from "services/products.api";
import { useAppDispatch } from "hooks/redux";
import { setCategories, setProducts } from 'store/reducers/productsSlice';


export const CatalogPage: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const dispatch = useAppDispatch();
  const { data: categories } = productsApi.useGetCategoriesQuery();

  useEffect(() => {
    if (categories && categories.length) {
      dispatch(setCategories(categories));
    }
  }, [dispatch, categories?.length, categories]);

  const { data: products } = productsApi.useGetProductsQuery({});

  useEffect(() => {
    if (products && products.length) {
      dispatch(setProducts(products));
    }
  }, [dispatch, products?.length, products]);


  return (
    <div className='_container'>
      {!isMobile ?
        <Breadcrumbs item='Косметика и гигиена' />
        : <BackButton className="backButton" />}
      <section className={cls.catalog}>
        <h1 className={`${cls.title} title1`}>Косметика и гигиена</h1>
        {!isMobile && <CategoryMenu className={cls.categories} type="top" />}
        <div className={cls.container}>
          <div className={cls.aside}>
            <Parameters className={cls.parameters} />
            <CategoryMenu type="left" />
            <Sort className={cls.sort} />
          </div>
          <ProductsContainer className={cls.productsContainer} />
        </div>
      </section>
    </div>
  );
};