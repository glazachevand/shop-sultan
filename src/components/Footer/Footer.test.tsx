import { screen } from '@testing-library/react';
import { componentRender } from 'utils/tests/componentRender';
import { Footer } from './Footer';

describe('Header.test', () => {

  test('Test render Footer', () => {
    componentRender(<Footer />);
    const elem = screen.getByTestId('footer');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('footer');
    expect(elem).toContainHTML('Меню сайта');
    expect(elem).toContainElement(screen.getAllByAltText('whatsapp')[0]);
  });

});