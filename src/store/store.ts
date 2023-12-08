import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "services/products.api";
import { cartReducer } from "./reducers/cartSlice";
import { filterReducer } from "./reducers/filterSlice";
import { productsReducer } from "./reducers/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filterReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
