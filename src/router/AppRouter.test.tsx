import { screen } from "@testing-library/react";
import React from "react";
import { AppRouter } from "router/AppRouter";
import { componentRender } from "utils/tests/componentRender";

describe('App.test', () => {
  test('Catalog page test', async () => {
    componentRender(<AppRouter />)
    const testIdToMatch = await screen.findByTestId('catalog-page');
    expect(testIdToMatch).toBeInTheDocument();
  });

  test('NotFound page test', async () => {
    componentRender(<AppRouter />, {
      route: '/qwerty'
    })
    const testIdToMatch = await screen.findByTestId('notfound-page');
    expect(testIdToMatch).toBeInTheDocument();
  });

  test('FullProduct page test', async () => {
    componentRender(<AppRouter />, {
      route: '/product/2'
    });
    const testIdToMatch = await screen.findByTestId('fullproduct-page');
    expect(testIdToMatch).toBeInTheDocument();
  });

  test('Cart page test', async () => {
    componentRender(<AppRouter />, {
      route: '/cart'
    });
    const testIdToMatch = await screen.findByTestId('cart-page');
    expect(testIdToMatch).toBeInTheDocument();
  });
});