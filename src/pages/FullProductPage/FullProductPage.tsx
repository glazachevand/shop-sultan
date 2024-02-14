import { FC } from 'react';

import { ProductFull } from 'components/ProductFull/ProductFull';
import { BackButton } from 'components/UI/BackButton/BackButton';
import { Breadcrumbs } from 'components/UI/Breadcrumbs/Breadcrumbs';
import { Loader } from 'components/UI/Loader/Loader';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { productsApi } from 'services/products.api';

import cls from './FullProductPage.module.scss';

const FullProductPage: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { isLoading, data: product, isError } = productsApi.useGetOneProductQuery(Number(id));
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <div className='_container' data-testid='fullproduct-page'>
      {!isMobile ?
        <Breadcrumbs item={product ? product.title : t('product.page_product')} />
        : <BackButton className="backButton" />}
      <section className={cls.fullproduct}>
        {isLoading && <div className="text-center"><Loader /></div>}
        {isError && <h2 className="title2">{t('messages.error_load_product')} <span>😕</span></h2>}
        {product && <ProductFull product={product} />
        }
      </section>
    </div>
  );
};

export default FullProductPage;