import { screen } from "@testing-library/react";
import { renderWithRouter } from "utils/tests/renderWithRouter";

import { CategoryGlobalMenu } from "./CategoryGlobalMenu";

describe('CategoryGlobalMenu.test', () => {
  test('Test render footer global menu', () => {
    renderWithRouter(<CategoryGlobalMenu variant="footer" />);
    const elem = screen.getByTestId('categoryGlobalMenu');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass("CategoryGlobalMenu");
    expect(elem).toHaveClass("footer");
  });
});