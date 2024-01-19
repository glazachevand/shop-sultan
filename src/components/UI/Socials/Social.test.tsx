import { render, screen } from '@testing-library/react';
import { Socials } from './Socials';


describe('Socials.test', () => {
  test('Test render socials', () => {
    render(<Socials />)
    expect(screen.getByAltText('whatsapp')).toBeInTheDocument();
    expect(screen.getByAltText('whatsapp')).toContainHTML('img');
    expect(screen.getByAltText('telegram')).toBeInTheDocument();
    expect(screen.getByAltText('telegram')).toContainHTML('img');
  });
});