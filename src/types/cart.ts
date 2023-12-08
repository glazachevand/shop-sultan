import { IProduct } from "./products";

export interface ICartItem extends IProduct {
  count: number;
}
export interface ICartState {
  items: ICartItem[];
  totalPrice: number;
  totalCounts: number;
}
