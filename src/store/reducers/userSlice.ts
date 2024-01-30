import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "types/user";

const initialState: IUserState = {
  isAdmin: false,
};

export const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAdminAuth: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { setAdminAuth } = useSlice.actions;
export const userReducer = useSlice.reducer;
