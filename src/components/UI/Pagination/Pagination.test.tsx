import { fireEvent, screen } from "@testing-library/react";
import { RootState } from "store/store";
import { componentRender } from "utils/tests/componentRender";
import { Pagination } from "./Pagination";

describe('Pagination.test', () => {
  test('Test pagination with preloadedState', async () => {
    const preloadedState: Partial<RootState> = {
      filters: {
        typecare: [],
        priceMin: 10,
        priceMax: 10000,
        manufacturers: [],
        limit: 9,
        page: 2,
        sort: ["price", "asc"],
      },
      products: {
        filteredProducts: [],
        categories: [],
        manufactures: [],
        countProducts: 45,
        minPrice: 10,
        maxPrice: 10000
      },
    }
    componentRender(
      <Pagination />, { preloadedState }
    );
    const elem = await screen.findByTestId('pagination');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent('5');

    // find active page
    const activePage = await screen.findByText('2');
    expect(activePage).toHaveClass('active');
    const prevPage = await screen.findByText('1');

    // click on prev page
    fireEvent.click(prevPage);
    expect(prevPage).toHaveClass('active');
    let leftArrow = screen.queryByAltText('prev page');
    expect(leftArrow).not.toBeInTheDocument();
    let rightArrow = screen.queryByAltText('next page');
    expect(rightArrow).toBeInTheDocument();

    // click on right arrow
    if (rightArrow) {
      fireEvent.click(rightArrow);
    }
    leftArrow = screen.queryByAltText('prev page');
    rightArrow = screen.queryByAltText('next page');
    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();

    // click on last page
    const lastPage = await screen.findByText('5');
    fireEvent.click(lastPage);
    leftArrow = screen.queryByAltText('prev page');
    rightArrow = screen.queryByAltText('next page');
    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).not.toBeInTheDocument();
  });
});