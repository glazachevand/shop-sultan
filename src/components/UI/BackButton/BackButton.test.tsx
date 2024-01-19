import { screen } from "@testing-library/react";
import { renderWithRouter } from "utils/tests/renderWithRouter";
import { BackButton } from "./BackButton";

describe('BackButton.test', () => {
  test('Test render BackButton', () => {
    renderWithRouter(<BackButton />)
    expect(screen.getByText(/Назад/i)).toBeInTheDocument();
  });
});