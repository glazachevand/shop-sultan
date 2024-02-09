import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "utils/tests/renderWithTranslation";
import { LangSwitcher } from "./LangSwitcher";

describe('LangSwitcher.test', () => {
  test('Test render LangSwitcher', () => {
    renderWithTranslation(<LangSwitcher />);
    const ru = screen.getByTestId('russian');
    expect(ru).toBeInTheDocument();
    const en = screen.getByTestId('english');
    expect(en).toBeInTheDocument();
  });

  test('Test change language', async () => {
    renderWithTranslation(<LangSwitcher />);
    let ru = screen.getByTestId('russian');
    let en = screen.getByTestId('english');
    expect(ru).toHaveClass('active');
    expect(en).not.toHaveClass('active');
    expect(screen.getByTitle(/Русский/i)).toBeInTheDocument();
    // смена языка на английский
    fireEvent.click(en);
    en = await screen.findByTestId('english');
    ru = await screen.findByTestId('russian');
    expect(en).toHaveClass('active');
    expect(ru).not.toHaveClass('active');
    const ruTitle = await screen.findByTitle(/Russian/i);
    expect(ruTitle).toBeInTheDocument();
  });
});