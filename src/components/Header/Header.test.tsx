import { screen } from '@testing-library/react';
import { componentRender } from 'utils/tests/componentRender';
import { Header } from './Header';

describe('Header.test', () => {

  test('Test render header', () => {
    componentRender(<Header />);
    const elem = screen.getByTestId('header');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('header');
    expect(elem).toContainHTML('Каталог');
    expect(elem).toContainElement(screen.getAllByAltText('logo')[0]);
  });

});