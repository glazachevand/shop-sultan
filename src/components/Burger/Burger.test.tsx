import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from 'utils/tests/renderWithRouter';
import { Burger } from './Burger';

describe('Burger.test', () => {

  test('Test render Burger', () => {
    renderWithRouter(<Burger />);
    const elem = screen.getByTestId('burger');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('burger');
    expect(screen.getByTestId('btn')).toHaveClass('navIcon');
  });

  test('Test click on burger', () => {
    renderWithRouter(<Burger />);
    const elem = screen.getByTestId('button');
    fireEvent.click(elem);
    expect(screen.getByTestId('btn')).toHaveClass('navIconActive');
  });

});