import { fireEvent, screen } from '@testing-library/react';
import { RootState } from 'store/store';
import { componentRender } from 'utils/tests/componentRender';

import { Sort } from './Sort';

describe('Search.test', () => {
  let preloadedState: Partial<RootState>;

  beforeEach(() => {
    preloadedState = {
      filters: {
        typecare: [],
        priceMin: 10,
        priceMax: 10000,
        manufacturers: [],
        limit: 9,
        page: 1,
        sort: ["price", "asc"],
      },
    }
  });
  test('Test render sort', async () => {
    componentRender(<Sort />, { preloadedState });
    const elem = await screen.findByTestId('sort');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('sort');
    expect(elem).toHaveTextContent('Цена (по возрастанию)');
  });

  test('Test change sort type', async () => {
    componentRender(<Sort />, { preloadedState });
    let title = await screen.findByTestId('sort');
    // при клике по названию должно появиться контекстное меню
    fireEvent.click(title);
    const popup = await screen.findByTestId('popup');
    expect(popup).toBeInTheDocument();
    // клик по 3-ему пункту 
    let inputs = await screen.findAllByRole('radio');
    expect(inputs[2]).toBeInTheDocument();
    fireEvent.click(inputs[2]);
    title = await screen.findByTestId('sort');
    expect(title).toHaveTextContent('Название (по возрастанию)');
    inputs = await screen.findAllByRole('radio');
    expect(inputs[2]).toBeChecked();
  });
});