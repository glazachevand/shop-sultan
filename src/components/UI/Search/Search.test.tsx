import { render, screen } from '@testing-library/react';
import { Search } from './Search';

describe('Search.test', () => {
  test('Test render Search', () => {
    render(<Search />);
    const elem = screen.getByTestId('search');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('big');
    expect(screen.getByRole('searchbox')).toBeInTheDocument;
    expect(screen.getByPlaceholderText(/Поиск/)).toHaveClass('input');
    expect(screen.getByAltText('search')).toBeInTheDocument;
  });

  test('Test Search small', () => {
    render(<Search size='small' />);
    const elem = screen.getByTestId('search');
    expect(elem).toHaveClass('small');
  });
});