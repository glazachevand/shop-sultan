import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IProduct, IProductsState } from "types/products";
import { getManufactures } from "utils/getManufactures ";

const initialState: IProductsState = {
  productsCount: 0,
  filteredProducts: [],
  categories: [],
  manufactures: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsCount: (state, action: PayloadAction<number>) => {
      state.productsCount = action.payload;
    },
    setFilteredProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.filteredProducts = action.payload;
      state.manufactures = getManufactures(action.payload);
    },
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    },
    // addCategory: (state, action: PayloadAction<string>) => {
    //   state.categories.push(action.payload);
    // },
    // updateCategory: (state, action: PayloadAction<string>) => {
    //   let findElem = state.categories.find((item) => item === action.payload);

    //   if (!findElem) {
    //     findElem = action.payload;
    //   }
    // },
    // deletePCategory: (state, action: PayloadAction<string>) => {
    //   state.categories.filter((item) => item !== action.payload);
    // },
  },
});

export const {
  setProductsCount,
  setFilteredProducts,
  setCategories,
  // addCategory,
  // updateCategory,
  // deletePCategory,
} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
