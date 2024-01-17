import { screen } from "@testing-library/react";
import React, { ReactNode } from "react";
import { AppRouter } from "router/AppRouter";
import { componentRender } from "utils/tests/componentRender";
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'types/const/routes';

describe('App.test', () => {
  let appRouter: ReactNode;

  beforeAll(async () => {
    const CatalogPage = await React.lazy(() => import(/*webpackChunkName: "CatalogPage"*/'pages/CatalogPage/CatalogPage'));
    const FullProductPage = await React.lazy(() => import(/*webpackChunkName: "FullProductPage"*/'pages/FullProductPage/FullProductPage'));
    const CartPage = await React.lazy(() => import(/*webpackChunkName: "CartPage"*/'pages/CartPage/CartPage'));
    const NotFoundPage = await React.lazy(() => import(/*webpackChunkName: "NotFoundPage"*/'pages/NotFoundPage/NotFoundPage'));

    appRouter = (
      <Routes>
        <Route path={ROUTES.CATALOG} element={<CatalogPage />} />
        <Route path={ROUTES.PRODUCT} element={<FullProductPage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    );

  })

  test('Router catalog page', async () => {
    componentRender(<AppRouter />)
    const textToMatch = await screen.findByTestId('catalog-page');
    expect(textToMatch).toBeInTheDocument();
  });

  test('NotFound page test', async () => {
    componentRender(<AppRouter />, {
      route: '/qwerty'
    })
    const textToMatch = await screen.findByTestId('notfound-page');
    expect(textToMatch).toBeInTheDocument();
  });

  test('FullProduct page test', async () => {
    componentRender(appRouter, {
      route: '/product/2'
    });
    const textToMatch = await screen.findByTestId('fullproduct-page');
    expect(textToMatch).toBeInTheDocument();
  });

  test('Cart page test', async () => {
    componentRender(appRouter, {
      route: '/cart'
    });
    const textToMatch = await screen.findByTestId('cart-page');
    expect(textToMatch).toBeInTheDocument();
  });
});