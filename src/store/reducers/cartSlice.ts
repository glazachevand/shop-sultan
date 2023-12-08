import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, ICartState } from "types/cart";

const initialState: ICartState = {
  items: [],
  totalPrice: 0,
  totalCounts: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalCounts = 0;
    },
    addProductToCart: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find((item) => item.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      cartSlice.caseReducers.calculateCountAndPrice(state);
    },
    minusProductInCart: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find((item) => item.id === action.payload.id);

      if (findItem) {
        findItem.count--;
      }

      cartSlice.caseReducers.calculateCountAndPrice(state);
    },
    removeProductInCart: (state, action: PayloadAction<ICartItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      cartSlice.caseReducers.calculateCountAndPrice(state);
    },
    calculateCountAndPrice: (state) => {
      state.totalCounts = state.items.reduce((sum, item) => sum + item.count, 0);
      state.totalPrice = state.items.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0);
    },
  },
});

export const { addProductToCart, minusProductInCart, removeProductInCart, clearCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
