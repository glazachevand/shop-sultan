import { fireEvent, screen } from "@testing-library/react";
import { RootState } from "store/store";
import { componentRender } from "utils/tests/componentRender";
import { Parameters } from "./Parameters";

describe('Parameters.test', () => {
  test('Test render parameters with initialState', async () => {
    componentRender(<Parameters />);
    const minMax = await screen.findAllByRole('textbox');
    expect(minMax[0]).toHaveValue('10');
    expect(minMax[1]).toHaveValue('10000');
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.getByText('Показать')).toBeInTheDocument();
    expect(screen.getByAltText('remove')).toBeInTheDocument();
  });

  test('Test render parameters with preloadedState', async () => {
    const preloadedState: Partial<RootState> = {
      products: {
        filteredProducts: [],
        categories: [],
        manufactures: [
          ["Synergetic", 2],
          ["ООО 'БИГ'", 3],
          ["Клинса", 4],
          ["Тест", 2],
          ["BioMio", 1],
          ["Tresemme", 5],
          ["Consly", 1]
        ],
        countProducts: 0
      },
      filters: {
        typecare: [],
        priceMin: 100,
        priceMax: 5000,
        manufacturers: ["Клинса", "Consly"],
        limit: 9,
        page: 1,
        sort: ["price", "asc"],
      }
    }

    componentRender(<Parameters />, { preloadedState });

    const minMax = await screen.findAllByRole('textbox');
    expect(minMax[0]).toHaveValue('100');
    expect(minMax[1]).toHaveValue('5000');

    const checkboxes = await screen.findAllByRole('checkbox');
    expect(checkboxes.length).toBe(4);

    const checkboxList = await screen.findByTestId('checkboxList');
    expect(checkboxList).toHaveTextContent('Synergetic');

    const checkManuf = await screen.findByText("Клинса");
    expect(checkManuf).toBeChecked;
  });

  test('Test search', async () => {
    const preloadedState: Partial<RootState> = {
      products: {
        filteredProducts: [],
        categories: [],
        manufactures: [
          ["Synergetic", 2],
          ["ООО 'БИГ'", 3],
          ["Клинса", 4],
          ["Тест", 2],
          ["BioMio", 1],
          ["Tresemme", 5],
          ["Consly", 1]
        ],
        countProducts: 0
      },
      filters: {
        typecare: [],
        priceMin: 100,
        priceMax: 5000,
        manufacturers: ["Клинса", "Consly"],
        limit: 9,
        page: 1,
        sort: ["price", "asc"],
      }
    }

    componentRender(<Parameters />, { preloadedState });
    let searchInput = await screen.findByRole('searchbox');
    fireEvent.input(searchInput, { target: { value: "Con" } });
    searchInput = await screen.findByRole('searchbox');
    expect(searchInput).toHaveValue('Con');
    const checkboxes = await screen.findAllByRole('checkbox');
    expect(checkboxes.length).toBe(1);
    const checkboxList = await screen.findByTestId('checkboxList');
    expect(checkboxList).toHaveTextContent('Consly');
  });

  test('Test change range of price', async () => {
    componentRender(<Parameters />,);

    let minMax = await screen.findAllByRole('textbox');
    expect(minMax[0]).toHaveValue('10');
    expect(minMax[1]).toHaveValue('10000');
    fireEvent.input(minMax[0], { target: { value: "200" } })
    fireEvent.input(minMax[1], { target: { value: "2000" } })
    minMax = await screen.findAllByRole('textbox');
    expect(minMax[0]).toHaveValue('200');
    expect(minMax[1]).toHaveValue('2000');
  });

  test('Test click on button "show more"', async () => {
    const preloadedState: Partial<RootState> = {
      products: {
        filteredProducts: [],
        categories: [],
        manufactures: [
          ["Synergetic", 2],
          ["ООО 'БИГ'", 3],
          ["Клинса", 4],
          ["Тест", 2],
          ["BioMio", 1],
          ["Tresemme", 5],
          ["Consly", 1]
        ],
        countProducts: 0
      },
      filters: {
        typecare: [],
        priceMin: 100,
        priceMax: 5000,
        manufacturers: ["Клинса", "Consly"],
        limit: 9,
        page: 1,
        sort: ["price", "asc"],
      }
    }

    componentRender(<Parameters />, { preloadedState });
    let checkboxList = await screen.findByTestId('checkboxList');
    expect(checkboxList).not.toHaveTextContent('Consly');
    let checkboxes = await screen.findAllByRole('checkbox');
    expect(checkboxes.length).toBe(4);

    fireEvent.click(screen.getByText('Показать все'));
    checkboxList = await screen.findByTestId('checkboxList');
    expect(checkboxList).toHaveTextContent('Consly');
    checkboxes = await screen.findAllByRole('checkbox');
    expect(checkboxes.length).toBe(7);
  });

  test('Test click on button "remove"', async () => {
    const preloadedState: Partial<RootState> = {
      products: {
        filteredProducts: [],
        categories: [],
        manufactures: [
          ["Synergetic", 2],
          ["ООО 'БИГ'", 3],
          ["Клинса", 4],
          ["Тест", 2],
          ["BioMio", 1],
          ["Tresemme", 5],
          ["Consly", 1]
        ],
        countProducts: 0
      },
      filters: {
        typecare: [],
        priceMin: 100,
        priceMax: 5000,
        manufacturers: ["Клинса", "Consly"],
        limit: 9,
        page: 1,
        sort: ["price", "asc"],
      }
    }

    componentRender(<Parameters />, { preloadedState });
    let minMax = await screen.findAllByRole('textbox');
    expect(minMax[0]).toHaveValue('100');
    expect(minMax[1]).toHaveValue('5000');
    const checkboxes = await screen.findAllByRole('checkbox');
    expect(checkboxes.length).toBe(4);

    const remove = await screen.getByAltText('remove');
    fireEvent.click(remove);
    minMax = await screen.findAllByRole('textbox');
    expect(minMax[0]).toHaveValue('10');
    expect(minMax[1]).toHaveValue('10000');
  });

});