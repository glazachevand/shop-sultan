import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'utils/tests/componentRender';
import { Burger } from './Burger';

describe('Burger.test', () => {

  test('Test render Burger', () => {
    componentRender(<Burger />);
    const elem = screen.getByTestId('burger');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('burger');
    expect(screen.getByTestId('btn')).toHaveClass('navIcon');
  });

  test('Test click on burger', () => {
    componentRender(<Burger />);
    const elem = screen.getByTestId('button');
    fireEvent.click(elem);
    expect(screen.getByTestId('btn')).toHaveClass('navIconActive');
  });

});