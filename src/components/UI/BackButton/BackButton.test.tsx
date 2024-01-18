import { screen } from "@testing-library/react";
import { componentRender } from "utils/tests/componentRender";
import { BackButton } from "./BackButton";

describe('BackButton.test', () => {
  test('Test render BackButton', () => {
    componentRender(<BackButton />)
    expect(screen.getByText(/Назад/i)).toBeInTheDocument();
  });
});