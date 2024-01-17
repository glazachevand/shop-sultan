// import CartPage from 'pages/CartPage/CartPage';
// import CatalogPage from 'pages/CatalogPage/CatalogPage';
// import FullProductPage from 'pages/FullProductPage/FullProductPage';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'types/const/routes';
import { Loader } from 'components/UI/Loader/Loader';

const CatalogPage = React.lazy(() => import(/*webpackChunkName: "CatalogPage"*/'pages/CatalogPage/CatalogPage'));
const FullProductPage = React.lazy(() => import(/*webpackChunkName: "FullProductPage"*/'pages/FullProductPage/FullProductPage'));
const CartPage = React.lazy(() => import(/*webpackChunkName: "CartPage"*/'pages/CartPage/CartPage'));
const NotFoundPage = React.lazy(() => import(/*webpackChunkName: "NotFoundPage"*/'pages/NotFoundPage/NotFoundPage'));

export const AppRouter = () => {
  return (
    <Suspense fallback={<div className="text-center"><Loader /></div>}>
      <Routes>
        <Route path={ROUTES.CATALOG} element={<CatalogPage />} />
        <Route path={ROUTES.PRODUCT} element={<FullProductPage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};