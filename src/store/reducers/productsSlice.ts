import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IProductsState } from "types/products";
import { getManufactures } from "utils/getManufactures ";

const initialState: IProductsState = {
  products: [],
  filteredProducts: [],
  categories: [],
  manufactures: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
      state.manufactures = getManufactures(action.payload);
    },
    setFilteredProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.filteredProducts = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setProducts, setFilteredProducts, setCategories } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
