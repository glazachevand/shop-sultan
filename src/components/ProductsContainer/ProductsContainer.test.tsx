import { screen } from "@testing-library/react";
import { RootState } from "store/store";
import { componentRender } from "utils/tests/componentRender";

import { ProductsContainer } from "./ProductsContainer";

describe('ProductsContainer.test', () => {
  test('Test render ProductsContainer', async () => {

    const preloadedState: Partial<RootState> = {
      products: {
        filteredProducts: [],
        categories: [],
        manufactures: [],
        countProducts: 18,
        minPrice: 10,
        maxPrice: 10000
      },
      filters: {
        typecare: [],
        priceMin: 10,
        priceMax: 10000,
        manufacturers: [],
        limit: 4,
        page: 1,
        sort: ["price", "asc"],
      }
    }

    componentRender(<ProductsContainer />, { preloadedState });
    const productsContainer = await screen.findByTestId('productsContainer');
    expect(productsContainer).toBeInTheDocument();
    const productsImg = await screen.findAllByAltText('product');
    expect(productsImg.length).toBe(4);
    const pagination = await screen.findByTestId('pagination');
    expect(pagination).toHaveTextContent("5");
  });
});