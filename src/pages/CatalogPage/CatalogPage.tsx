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
import { setCategories, setFilteredProducts } from 'store/reducers/productsSlice';
import { Button } from 'components/UI/Button/Button';
import { Modal } from 'components/UI/Modal/Modal';
import { FormProduct } from 'components/FormProduct/FormProduct';
import { setPage } from 'store/reducers/filterSlice';
import { CategoryItem } from 'components/UI/CategoryMenu/CategoryItem/CategoryItem';
import { ICategory } from 'types/products';
import { Loader } from 'components/UI/Loader/Loader';
import { limitPerPage } from "types/pages";
import { setLimit } from "store/reducers/filterSlice";

const CatalogPage: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [addCategory, setAddCategory] = useState(false);
  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector(state => state.user.isAdmin);
  const { categories, filteredProducts } = useAppSelector(state => state.products);
  const { typecare, priceMin, priceMax, manufacturers, sort } = useAppSelector((state) => state.filters);

  const { data: fetchCategories } = useGetCategoriesQuery();
  const { data: fetchFilteredProducts, isLoading, isError } = useGetProductsQuery({ priceMin, priceMax, typecare, manufacturers, sort })

  useEffect(() => {
    const mediaNDesktop = window.matchMedia('(min-width: 1400.98px)');
    const mediaNotebook = window.matchMedia('(max-width: 1400px)');
    const mediaMobile = window.matchMedia('(max-width: 1024px)');

    function adaptPagination() {
      if (mediaMobile.matches) {
        dispatch(setLimit(limitPerPage.MOBILE));
      } else if (mediaNotebook.matches) {
        dispatch(setLimit(limitPerPage.NOTEBOOK));
      } else if (mediaNDesktop.matches) {
        dispatch(setLimit(limitPerPage.DESKTOP));
      }
    }

    adaptPagination();

    mediaNDesktop.addEventListener('change', adaptPagination);
    mediaNotebook.addEventListener('change', adaptPagination);
    mediaMobile.addEventListener('change', adaptPagination);

    return () => {
      mediaNDesktop.removeEventListener('change', adaptPagination);
      mediaNotebook.removeEventListener('change', adaptPagination);
      mediaMobile.removeEventListener('change', adaptPagination);
    };

  }, []);

  useEffect(() => {
    if (fetchCategories && fetchCategories.length) {
      dispatch(setCategories(fetchCategories));
    }
  }, [dispatch, fetchCategories?.length, fetchCategories]);

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
        {!isMobile && categories?.length > 0 && <CategoryMenu className={cls.categories} type="top" />}
        <div className={cls.container}>
          <div className={cls.aside}>
            {isLoading && <div className="text-center"><Loader /></div>}
            {isError && <h2 className="title2">Ошибка при загрузке с сервера <span>😕</span></h2>}
            {isAdmin && (
              <Button
                className={cls.addProduct}
                text="Добавить товар"
                width="200px"
                height="59px"
                onClick={() => setOpenModal(true)}
              />
            )}
            {filteredProducts?.length > 0 && <Parameters className={cls.parameters} />}
            {categories?.length > 0 && <CategoryMenu type={isAdmin ? 'admin' : 'left'} />}
            {filteredProducts?.length > 0 && <Sort className={cls.sort} />}
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
          {filteredProducts?.length > 0 && <ProductsContainer className={cls.productsContainer} />}
        </div>
      </section>
      {isAdmin && (
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)} type='order' isCloseBtn={true}>
          <div className="formModal">
            <FormProduct onClose={setOpenModal} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CatalogPage;