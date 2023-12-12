import { ICartItem } from "types/cart";

export const calcTotalPrice = (items: ICartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
