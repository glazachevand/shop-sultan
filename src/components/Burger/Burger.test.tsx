import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from 'utils/tests/renderWithRouter';

import { Burger } from './Burger';

describe('Burger.test', () => {

  test('Test render Burger', () => {
    renderWithRouter(<Burger />);
    const elem = screen.getByTestId('burger');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('burger');
    expect(screen.getByTestId('burgerBtn')).toHaveClass('navIcon');
  });

  test('Test click on burger', () => {
    renderWithRouter(<Burger />);
    const button = screen.getByTestId('burgerButton');

    fireEvent.click(button);
    expect(screen.getByTestId('burgerMenu')).toBeInTheDocument();
    expect(screen.getByTestId('burgerBtn')).toHaveClass('navIconActive');

    fireEvent.click(button);
    expect(screen.queryByText('Меню сайта')).toBeNull();
    expect(screen.getByTestId('burgerBtn')).not.toHaveClass('navIconActive');
  });

});