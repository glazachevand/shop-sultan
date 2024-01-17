import { ICartItem } from "types/cart";
import { calcTotalPrice } from "./calcTotalPrice";

describe("calcTotalPrice.test", () => {
  test("should return null", () => {
    const items = [
      {
        price: 0,
        count: 0,
      },
    ];
    expect(calcTotalPrice(items as ICartItem[])).toBe(0);
  });
  test("should return sum items count", () => {
    const items = [
      {
        price: 100,
        count: 3,
      },
      {
        price: 50,
        count: 2,
      },
    ];
    expect(calcTotalPrice(items as ICartItem[])).toBe(400);
  });
});
