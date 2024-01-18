import { screen } from "@testing-library/react";
import { RootState } from "store/store";
import { componentRender } from "utils/tests/componentRender";
import { CartBtn } from "./CartBtn";

describe('CartBtn.test', () => {
  test('Test isText, img on cart', async () => {
    const preloadedState: Partial<RootState> = {
      cart: {
        items: [],
        totalPrice: 20000,
        totalCounts: 2
      },
    }

    componentRender(<CartBtn isText={true} />, {
      preloadedState
    })
    const textToMatch1 = await screen.findByText(/Корзина/i);
    expect(textToMatch1).toBeInTheDocument();
    const textToMatch2 = await screen.findByText(/20000 ₸/i);
    expect(textToMatch2).toBeInTheDocument();
    const textToMatch3 = await screen.findByText(2);
    expect(textToMatch3).toBeInTheDocument();
    expect(screen.getByAltText('cart')).toBeInTheDocument();
    expect(screen.getByAltText('cart')).toContainHTML('img');
  });
});