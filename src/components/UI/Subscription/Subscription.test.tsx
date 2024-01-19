import { Subscription } from "./Subscription";
import { fireEvent, render, screen } from '@testing-library/react';


describe('Subscription.test', () => {
  test('Test render subscription', () => {
    render(<Subscription />);
    const elem = screen.getByTestId('subscription');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent('Подпишись');
    expect(screen.getByPlaceholderText('Введите ваш E-mail')).toBeInTheDocument();
    expect(screen.getByAltText('subscription')).toContainHTML('img');
  });

  test('Test enter text', () => {
    render(<Subscription />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    fireEvent.input(input, { target: { value: 'qwerty@gmail.com' } });
    expect(input).toHaveDisplayValue('qwerty@gmail.com');
  });
});