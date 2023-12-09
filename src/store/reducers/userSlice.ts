import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "types/user";

const initialState: IUserState = {
  isAdmin: true,
};

export const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { setIsAdmin } = useSlice.actions;
export const userReducer = useSlice.reducer;
