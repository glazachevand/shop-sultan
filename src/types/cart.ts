export interface CartItemType {
  id: number;
  title: string;
  url: string;
  brand: string;
  description: string;
  typesize: string;
  size: string;
  price: number;
  count: number;
}
export interface CartState {
  totalPrice: number;
  items: CartItemType[];
}

export enum CartActionTypes {
  ADD_ITEM = "ADD_ITEM",
  MINUS_ITEM = "MINUS_ITEM",
  DELETE_ITEM = "DELETE_ITEM",
  CLEAR_ITEMS = "CLEAR_ITEMS",
}
interface AddCartsAction {
  type: CartActionTypes.ADD_ITEM;
  payload: CartItemType;
}
interface MinusCartsAction {
  type: CartActionTypes.MINUS_ITEM;
  payload: CartItemType;
}
interface DeleteCartsAction {
  type: CartActionTypes.DELETE_ITEM;
  payload: CartItemType;
}
interface ClearCartsAction {
  type: CartActionTypes.CLEAR_ITEMS;
}

export type CartsAction = AddCartsAction | MinusCartsAction | DeleteCartsAction | ClearCartsAction;
