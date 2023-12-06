import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFilterState, ParametersType } from "types/filters";

const initialState: IFilterState = {
  categories: [],
  priceMin: 10,
  priceMax: 10000,
  manufacturers: [],
  limit: 100,
  page: 1,
  sort: "asc",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilteredCategories: (state, action: PayloadAction<string>) => {
      const findElem = state.categories.find((item) => item === action.payload);
      if (!findElem) {
        state.categories.push(action.payload);
      } else {
        state.categories = state.categories.filter((item) => item !== action.payload);
      }
    },
    setParameters: (state, action: PayloadAction<ParametersType>) => {
      state.priceMin = action.payload.priceMin;
      state.priceMax = action.payload.priceMax;
      state.manufacturers = action.payload.manufacturers;
    },
    clearParameters: (state) => {
      state.priceMin = 10;
      state.priceMax = 10000;
      state.manufacturers = [];
    },
  },
});

export const { setFilteredCategories, setParameters, clearParameters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
