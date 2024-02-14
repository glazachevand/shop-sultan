import { fireEvent, screen } from "@testing-library/react";
import { RootState } from "store/store";
import { componentRender } from "utils/tests/componentRender";

import { CategoryMenu } from "./CategoryMenu";

describe('CategoryMenu.test', () => {
  let preloadedState: Partial<RootState>;
  beforeEach(() => {
    preloadedState = {
      products: {
        filteredProducts: [],
        manufactures: [],
        countProducts: 0,
        minPrice: 10,
        maxPrice: 10000,
        categories: [
          {
            "id": 3,
            "title": "Уход за ногами"
          },
          {
            "id": 4,
            "title": "Уход за лицом"
          },
          {
            "id": 5,
            "title": "Уход за волосами"
          },
        ],
      },
      filters: {
        typecare: ["Уход за волосами"],
        priceMin: 10,
        priceMax: 10000,
        manufacturers: [],
        limit: 9,
        page: 1,
        sort: ["price", "asc"],
      }
    }
  });

  test('Test top categories', async () => {
    componentRender(<CategoryMenu variant='top' />, {
      preloadedState
    })
    const elem = await screen.findByTestId('categoryMenu');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass("categoryMenu");
    expect(elem).toHaveClass("top");
    const activeElem = await screen.findByText("Уход за волосами");
    expect(activeElem).toBeInTheDocument();
    expect(activeElem).toHaveClass("active");
    fireEvent.click(activeElem);
    expect(activeElem).not.toHaveClass("active");
  });

  test('Test left categories', async () => {
    componentRender(<CategoryMenu variant='left' />, {
      preloadedState
    })
    const elem = await screen.findByTestId('categoryMenu');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass("categoryMenu");
    expect(elem).toHaveClass("left");
    const activeElem = await screen.findByText("Уход за волосами");
    expect(activeElem).toBeInTheDocument();
    expect(activeElem).toHaveClass("active");
    fireEvent.click(activeElem);
    expect(activeElem).not.toHaveClass("active");
  });

  test('Test admin categories', async () => {
    componentRender(<CategoryMenu variant='admin' />, {
      preloadedState
    })
    const elem = await screen.findByTestId('categoryMenu');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass("admin");
    const text = await screen.findByDisplayValue(/Уход за ногами/i);
    expect(text).toBeInTheDocument();
    const editBtns = await screen.findAllByTitle("Редактировать");
    expect(editBtns[0]).toBeInTheDocument();
    const deleteBtns = await screen.findAllByTitle("Удалить");
    expect(deleteBtns[0]).toBeInTheDocument();
  });
});