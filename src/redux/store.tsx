import { configureStore } from "@reduxjs/toolkit";
import cartReducter from "./slice";

export function makeStore() {
  return configureStore({
    reducer: {
      productsCart: cartReducter,
    },
  });
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
