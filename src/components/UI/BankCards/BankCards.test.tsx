import { render, screen } from '@testing-library/react';

import { BankCards } from "./BankCards";


describe('BankCards.test', () => {
  test('BankCards image test', () => {
    render(<BankCards />)
    expect(screen.getByAltText('visa')).toBeInTheDocument();
    expect(screen.getByAltText('visa')).toContainHTML('img');
    expect(screen.getByAltText('mastercard')).toBeInTheDocument();
    expect(screen.getByAltText('mastercard')).toContainHTML('img');
  });
});