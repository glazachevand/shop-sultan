import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'utils/tests/componentRender';

import { Search } from './Search';

describe('Search.test', () => {
  test('Test render Search', () => {
    componentRender(<Search />);
    const elem = screen.getByTestId('search');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('header');
    expect(screen.getByRole('searchbox')).toBeInTheDocument;
    expect(screen.getByPlaceholderText(/Поиск/)).toHaveClass('input');
    expect(screen.getByAltText('search')).toBeInTheDocument;
  });

  test('Test Search small', () => {
    componentRender(<Search variant='param' />);
    const elem = screen.getByTestId('search');
    expect(elem).toHaveClass('param');
  });

  test('Test search value', async () => {
    componentRender(<Search />);
    let input = await screen.findByRole('searchbox');
    fireEvent.input(input, { target: { value: 'шампу' } });
    input = await screen.findByRole('searchbox');
    expect(input).toHaveDisplayValue('шампу');
    const clearBtn = await screen.findByAltText('clear');
    expect(clearBtn).toBeInTheDocument;
    const dropdown = await screen.findByTestId('dropdown');
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveTextContent(/шампу/i);

    // клик по кнопке очистки текста
    fireEvent.click(clearBtn);
    input = await screen.findByRole('searchbox');
    expect(input).toHaveDisplayValue('');
    const dropdownNull = screen.queryByTestId('dropdown');
    expect(dropdownNull).toBeNull();
  });
});