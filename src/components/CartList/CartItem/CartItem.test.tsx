import { screen } from "@testing-library/react";
import { ICartItem } from "types/cart";
import { componentRender } from "utils/tests/componentRender";

import { CartItem } from "./CartItem";

describe('CartItem.test', () => {
  let cartItem: ICartItem;

  beforeEach(() => {
    cartItem = {
      id: 2,
      title: "Шампунь beauty-full volume плотность и объем",
      url: "product2.webp",
      barcode: 4704049097548,
      manufacturer: "Tresemme",
      brand: "Tresemme",
      description: "",
      typesize: "объем",
      size: "650 мл",
      typecare: [
        "Уход за волосами"
      ],
      price: 419,
      count: 3
    }
  });

  test('Test render cart item', () => {
    componentRender(<CartItem cartItem={cartItem} />);
    const elem = screen.getByTestId('cartItem');
    expect(elem).toBeInTheDocument();
    expect(elem).toContainHTML('src="product2.webp"');
    expect(elem).toContainHTML('src="bottle.svg"');
    expect(elem).toContainHTML('src="remove.svg"');
    expect(elem).toHaveTextContent('Шампунь beauty-full');
    expect(elem).toHaveTextContent('1257 ₽');
    expect(screen.getByTestId('countContainer')).toHaveTextContent('3');
  });

  // test('Test add and minus item', async () => {
  //   componentRender(<CartItem cartItem={cartItem} />, {
  //     preloadedState: {
  //       cart:
  //     }
  //   });
  //   let countContainer = await screen.findByTestId('countContainer');
  //   expect(countContainer).toHaveTextContent('3');
  //   const plus = screen.getByTestId('plus');
  //   const minus = screen.getByTestId('minus');
  //   fireEvent.click(plus);
  //   countContainer = await screen.findByTestId('countContainer');
  //   screen.debug();
  //   expect(countContainer).toHaveTextContent('4');
  // });
});