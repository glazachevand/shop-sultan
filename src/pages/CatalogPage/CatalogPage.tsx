import { ProductsList } from 'components/ProductsList/ProductsList';
import { Breadcrumbs } from 'components/UI/Breadcrumbs/Breadcrumbs';
import { CategoryMenu } from 'components/UI/CategoryMenu/CategoryMenu';
import { Pagination } from 'components/UI/Pagination/Pagination';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import cls from './CatalogPage.module.scss';
import { Parameters } from 'components/Parameters/Parameters';
import { BackButton } from 'components/UI/BackButton/BackButton';
import { Sort } from 'components/UI/Sort/Sort';

export const CatalogPage: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <div className='_container'>
      {!isMobile ? <Breadcrumbs item='Косметика и гигиена' /> : <BackButton className={cls.backButton} />}
      <section className={cls.catalog}>
        <h1 className={`${cls.title} title1`}>Косметика и гигиена</h1>
        {!isMobile && <CategoryMenu className={cls.categories} type="top" />}

        <div className={cls.container}>
          <div className={cls.aside}>
            <Parameters className={cls.parameters} />
            <CategoryMenu type="left" />
            <Sort className={cls.sort} />
          </div>
          <div className={cls.main}>
            <ProductsList className={cls.products} />
            <Pagination className={cls.pagination} />
            <p className={cls.footer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis
              iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue
              mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
          </div>
        </div>
      </section>
    </div>
  );
};