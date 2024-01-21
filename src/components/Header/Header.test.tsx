import { screen } from '@testing-library/react';
import { RootState } from 'store/store';
import { componentRender } from 'utils/tests/componentRender';
import { Header } from './Header';

describe('Header.test', () => {

  test('Test render header', () => {
    componentRender(<Header />);
    const elem = screen.getByTestId('header');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('header');
    expect(elem).toContainHTML('Каталог');
    expect(elem).toContainHTML('Прайс-лист');
    expect(elem).toContainElement(screen.getAllByAltText('logo')[0]);
    expect(elem).toContainElement(screen.getAllByTestId('search')[0]);
  });

  test('Test cart', async () => {
    const preloadedState: Partial<RootState> = {
      cart: {
        items: [],
        totalPrice: 20000,
        totalCounts: 2
      },
    }

    componentRender(<Header />, {
      preloadedState
    })
    const cart = await screen.findByTestId('cartBtn');
    expect(cart).toBeInTheDocument();
    expect(cart).toContainHTML('img');
    const price = await screen.findByText(/20000 ₸/i);
    expect(price).toBeInTheDocument();
  });

});