import { CheckboxList } from 'components/Parameters/CheckboxList/CheckboxList';
import { Breadcrumbs } from 'components/UI/Breadcrumbs/Breadcrumbs';
import React from 'react';

export const CatalogPage: React.FC = () => {

  return (
    <div>
      <h1>CatalogPage</h1>
      <Breadcrumbs item='Косметика и гигиена' />
      <CheckboxList />
    </div>
  );
};