import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IProduct, IProductsState } from "types/products";
import { getManufactures } from "utils/getManufactures ";

const initialState: IProductsState = {
  filteredProducts: [],
  categories: [],
  manufactures: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilteredProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.filteredProducts = action.payload;
      state.manufactures = getManufactures(action.payload);
    },
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setFilteredProducts, setCategories } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
