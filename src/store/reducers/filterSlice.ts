import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFilterState, ParametersType, SortType } from "types/filters";

const initialState: IFilterState = {
  typecare: [],
  priceMin: 10,
  priceMax: 10000,
  manufacturers: [],
  limit: 9,
  page: 1,
  sort: ["price", "asc"],
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilteredCategories: (state, action: PayloadAction<string>) => {
      const findElem = state.typecare.find((item) => item === action.payload);
      if (!findElem) {
        state.typecare.push(action.payload);
      } else {
        state.typecare = state.typecare.filter((item) => item !== action.payload);
      }
    },
    setParameters: (state, action: PayloadAction<ParametersType>) => {
      state.priceMin = action.payload.priceMin;
      state.priceMax = action.payload.priceMax;
      state.manufacturers = action.payload.manufacturers;
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    clearParameters: (state) => {
      state.priceMin = 10;
      state.priceMax = 10000;
      state.manufacturers = [];
    },
  },
});

export const { setFilteredCategories, setParameters, clearParameters, setSort, setPage, setLimit } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
