import { screen } from "@testing-library/react";
import { componentRender } from "utils/tests/componentRender";

import { Breadcrumbs } from "./Breadcrumbs";

describe('Breadcrumbs.test', () => {
  test('Test text in breadcrumbs', async () => {
    componentRender(<Breadcrumbs item="Страница товара" />)
    const textToMatch1 = await screen.findByText(/Главная/i);
    expect(textToMatch1).toBeInTheDocument();
    const textToMatch2 = await screen.findByText(/Страница товара/i);
    expect(textToMatch2).toBeInTheDocument();
  });
});