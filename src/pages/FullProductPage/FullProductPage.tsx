import { FC } from 'react';
import cls from './FullProductPage.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Breadcrumbs } from 'components/UI/Breadcrumbs/Breadcrumbs';
import { BackButton } from 'components/UI/BackButton/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data/data.json';
import { Product } from "types/products";
import { ProductFull } from 'components/ProductFull/ProductFull';

export const FullProductPage: FC = () => {
  const products = data.products as Product[];
  const { id } = useParams() || '';
  const navigate = useNavigate();
  const product = products.find(item => item.id === Number(id));
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <div className='_container'>
      {!isMobile ?
        <Breadcrumbs item={product ? product.title : 'Страница товара'} />
        : <BackButton className="backButton" />}
      <section className={cls.fullproduct}>
        {product ?
          <ProductFull product={product} />
          : <div><h2 className="title2">Ошибка при загрузке продукта  <span>😕</span></h2></div>
        }
        <h2 className='title2'>Похожие товары</h2>
      </section>
    </div>
  );
};