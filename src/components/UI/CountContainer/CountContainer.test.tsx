import { render, screen } from '@testing-library/react';
import { CountContainer } from './CountContainer';

describe('CountContainer.test', () => {
  const plusHandler = jest.fn();
  const minusHandler = jest.fn();

  test('Test render countContainer', () => {
    render(<CountContainer
      value={1}
      plusHandler={plusHandler}
      minusHandler={minusHandler} />
    );
    const elem = screen.getByTestId('countContainer');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent('-');
    expect(elem).toHaveTextContent('+');
    expect(elem).toHaveTextContent('1');
    expect(screen.getAllByRole('button')[0]).toBeDisabled();
  });
});