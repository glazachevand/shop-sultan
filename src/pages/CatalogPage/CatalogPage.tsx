import { Breadcrumbs } from 'components/UI/Breadcrumbs/Breadcrumbs';
import { CategoryMenu } from 'components/UI/CategoryMenu/CategoryMenu';
import { FC, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import cls from './CatalogPage.module.scss';
import { Parameters } from 'components/Parameters/Parameters';
import { BackButton } from 'components/UI/BackButton/BackButton';
import { Sort } from 'components/UI/Sort/Sort';
import { ProductsContainer } from 'components/ProductsContainer/ProductsContainer';
import { useGetCategoriesQuery, useGetProductsQuery } from "services/products.api";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { setCategories, setFilteredProducts, setProductsCount } from 'store/reducers/productsSlice';
import { Button } from 'components/UI/Button/Button';
import { Modal } from 'components/UI/Modal/Modal';
import { FormProduct } from 'components/UI/FormProduct/FormProduct';
import { setPage } from 'store/reducers/filterSlice';
import { CategoryItem } from 'components/UI/CategoryMenu/CategoryItem/CategoryItem';
import { ICategory } from 'types/products';


export const CatalogPage: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [addCategory, setAddCategory] = useState(false);
  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector(state => state.user.isAdmin);
  const { productsCount, categories, filteredProducts } = useAppSelector(state => state.products);
  const { typecare, priceMin, priceMax, manufacturers, sort } = useAppSelector((state) => state.filters);

  const { data: fetchCategories } = useGetCategoriesQuery();
  const { data: fetchProducts } = useGetProductsQuery({});
  const { data: fetchFilteredProducts, isLoading, isError } = useGetProductsQuery({ priceMin, priceMax, typecare, manufacturers, sort })

  useEffect(() => {
    if (fetchCategories && fetchCategories.length) {
      dispatch(setCategories(fetchCategories));
    }
  }, [dispatch, fetchCategories?.length, fetchCategories]);

  useEffect(() => {
    if (fetchProducts && fetchProducts.length) {
      dispatch(setProductsCount(fetchProducts.length));
    }
  }, [dispatch, fetchProducts?.length, fetchProducts]);

  useEffect(() => {
    if (fetchFilteredProducts && fetchFilteredProducts.length) {
      dispatch(setFilteredProducts(fetchFilteredProducts));
      dispatch(setPage(1));
    }
  }, [dispatch, fetchFilteredProducts?.length, fetchFilteredProducts]);

  return (
    <div className='_container'>
      {!isMobile ?
        <Breadcrumbs item='Косметика и гигиена' />
        : <BackButton className="backButton" />}
      <section className={cls.catalog}>
        <h1 className={`${cls.title} title1`}>Косметика и гигиена</h1>
        {!isMobile && !!categories.length && <CategoryMenu className={cls.categories} type="top" />}
        <div className={cls.container}>
          <div className={cls.aside}>
            {isAdmin && (
              <Button
                className={cls.addProduct}
                text="Добавить товар"
                width="200px"
                height="59px"
                onClick={() => setOpenModal(true)}
              />
            )}
            {isLoading && <p >Loading...</p>}
            {isError && <h2 className="title2">Ошибка при загрузке с сервера <span>😕</span></h2>}
            {!!filteredProducts.length && <Parameters className={cls.parameters} />}
            {!!categories.length && <CategoryMenu type={isAdmin ? 'admin' : 'left'} />}
            {!!filteredProducts.length && <Sort className={cls.sort} />}
            {isAdmin && addCategory &&
              <CategoryItem
                category={{ id: categories.length + 1, title: '' } as ICategory}
                type="new"
                add={() => setAddCategory(false)}
              />
            }
            {isAdmin && (
              <Button text="Добавить категорию" width="200px" height="59px" onClick={() => setAddCategory(true)} />
            )}
          </div>
          {!!filteredProducts.length && <ProductsContainer className={cls.productsContainer} />}
        </div>
      </section>
      {isAdmin && productsCount && (
        <Modal isOpen={openModal} onClose={() => setOpenModal((prev) => !prev)} type='order' isCloseBtn={true}>
          <div className="formModal">
            <FormProduct onClose={setOpenModal} />
          </div>
        </Modal>
      )}
    </div>
  );
};