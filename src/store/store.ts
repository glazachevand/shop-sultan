import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "services/products.api";
import { ICartState } from "types/cart";
import { IFilterState } from "types/filters";
import { IProductsState } from "types/products";
import { IUserState } from "types/user";
import { cartReducer } from "./reducers/cartSlice";
import { filterReducer } from "./reducers/filterSlice";
import { productsReducer } from "./reducers/productsSlice";
import { userReducer } from "./reducers/userSlice";

// export interface IStateSchema {
//   products: IProductsState;
//   filters: IFilterState;
//   cart: ICartState;
//   user: IUserState;
// }

const rootReducer = combineReducers({
  products: productsReducer,
  filters: filterReducer,
  cart: cartReducer,
  user: userReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
    preloadedState,
  });

  setupListeners(store.dispatch);
  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
