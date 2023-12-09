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
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<IProduct>) => {
      let findElem = state.products.find((item) => item.id === action.payload.id);

      if (!findElem) {
        findElem = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  setProducts,
  setFilteredProducts,
  setCategories,
  addProduct,
  updateProduct,
  deleteProduct,
} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
