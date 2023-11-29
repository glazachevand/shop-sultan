import { CheckboxList } from 'components/Parameters/CheckboxList/CheckboxList';
import { ProductFull } from 'components/ProductFull/ProductFull';
import { ProductsList } from 'components/ProductsList/ProductsList';
import { Breadcrumbs } from 'components/UI/Breadcrumbs/Breadcrumbs';
import { CategoryMenu } from 'components/UI/CategoryMenu/CategoryMenu';
import { Pagination } from 'components/UI/Pagination/Pagination';
import React from 'react';
import { Product } from "types/products";
import data from '../../data/data.json';

export const CatalogPage: React.FC = () => {
  const products = data.products as Product[];

  return (
    <div className='_container'>
      <h1>CatalogPage</h1>
      <Breadcrumbs item='Косметика и гигиена' />
      <CategoryMenu />
      <CheckboxList />
      {/* <ProductFull product={products[0]} /> */}
      <ProductsList />
      <Pagination />
    </div>
  );
};