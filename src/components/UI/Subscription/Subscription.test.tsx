import { Subscription } from "./Subscription";
import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from "utils/tests/renderWithRouter";


describe('Subscription.test', () => {
  test('Test render subscription', () => {
    renderWithRouter(<Subscription />);
    const elem = screen.getByTestId('subscription');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent('Подпишись');
    expect(screen.getByPlaceholderText('Введите ваш E-mail')).toBeInTheDocument();
    expect(screen.getByAltText('subscription')).toContainHTML('img');
  });

  test('Test enter text', () => {
    renderWithRouter(<Subscription />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    fireEvent.input(input, { target: { value: 'qwerty@gmail.com' } });
    expect(input).toHaveDisplayValue('qwerty@gmail.com');
  });
});