import { FC } from 'react';
import cls from './FullProductPage.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Breadcrumbs } from 'components/UI/Breadcrumbs/Breadcrumbs';
import { BackButton } from 'components/UI/BackButton/BackButton';
import { useParams } from 'react-router-dom';
import { ProductFull } from 'components/ProductFull/ProductFull';
import { productsApi } from 'services/products.api';

export const FullProductPage: FC = () => {
  const { id } = useParams() || '';
  const { isLoading, data: product, isError } = productsApi.useGetOneProductQuery(Number(id));
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <div className='_container'>
      {!isMobile ?
        <Breadcrumbs item={product ? product.title : 'Страница товара'} />
        : <BackButton className="backButton" />}
      <section className={cls.fullproduct}>
        {isLoading && <p className="text-center">Loading...</p>}
        {isError && <h2 className="title2">Ошибка при загрузке продукта <span>😕</span></h2>}
        {product && <ProductFull product={product} />
        }
      </section>
    </div>
  );
};