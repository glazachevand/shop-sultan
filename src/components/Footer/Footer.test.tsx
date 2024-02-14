import { screen } from '@testing-library/react';
import { renderWithRouter } from 'utils/tests/renderWithRouter';

import { Footer } from './Footer';

describe('Header.test', () => {

  test('Test render Footer', () => {
    renderWithRouter(<Footer />);
    const elem = screen.getByTestId('footer');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('footer');
    expect(elem).toContainHTML('Меню сайта');
    expect(elem).toContainHTML('Категории:');
    expect(elem).toContainHTML('Скачать прайс-лист:');
    expect(elem).toContainHTML('Контакты:');
    expect(elem).toContainElement(screen.getAllByAltText('whatsapp')[0]);
    expect(elem).toContainElement(screen.getAllByAltText('visa')[0]);
    expect(elem).toContainElement(screen.getAllByAltText('logo')[0]);
  });

});