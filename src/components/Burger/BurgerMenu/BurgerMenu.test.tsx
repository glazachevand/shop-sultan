import { screen } from "@testing-library/react";
import { renderWithRouter } from "utils/tests/renderWithRouter";
import { BurgerMenu } from "./BurgerMenu";

describe('BurgerMenu.test', () => {
  test('Test render burger menu', () => {
    renderWithRouter(<BurgerMenu />);
    const elem = screen.getByTestId('burgerMenu');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent(/О компании/i);
    expect(elem).toHaveTextContent(/Прайс-лист/i);
    expect(screen.getByAltText('sales department')).toBeInTheDocument();
  });
});