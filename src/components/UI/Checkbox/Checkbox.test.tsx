import { render, screen } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox.test', () => {
  const change = jest.fn();

  test('Test checked', () => {
    render(<Checkbox item='Булгари Грин' checked={true} count={3} change={change} />);
    expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toHaveClass('input');
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.getByText(/Булгари Грин/)).toBeInTheDocument();
  });
});