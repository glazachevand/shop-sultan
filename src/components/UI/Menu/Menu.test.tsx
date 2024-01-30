import { screen } from "@testing-library/react";
import { renderWithRouter } from "utils/tests/renderWithRouter";
import { Menu } from "./Menu";

describe('Menu.test', () => {
  test('Test render header  menu', () => {
    renderWithRouter(<Menu variant="header" />);
    const elem = screen.getByTestId('menu');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass("menu");
    expect(elem).toHaveClass("header");
  });

  test('Test render footer  menu', () => {
    renderWithRouter(<Menu variant="footer" />);
    const elem = screen.getByTestId('menu');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass("footer");
  });
});