import { screen } from "@testing-library/react";
import { componentRender } from "utils/tests/componentRender";
import { CategoryGlobalMenu } from "./CategoryGlobalMenu";

describe('CategoryGlobalMenu.test', () => {
  test('Test footer global menu', () => {
    componentRender(<CategoryGlobalMenu type="footer" />);
    const elem = screen.getByTestId('categoryGlobalMenu');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass("CategoryGlobalMenu");
    expect(elem).toHaveClass("footer");
  });
});