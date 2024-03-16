"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addedProductNocount, product, productsType } from "../app/types/type";
import { addedProduct } from "./../app/types/type";

// const initialState = {
//   product: [],
// };

type actionType = {
  payload: productsType[];
  type: string;
};
type removeType = {
  type: string;
  payload: number;
};

const Slice = createSlice({
  name: "cart",
  initialState: [] as productsType[],
  reducers: {
    add: (state, action: PayloadAction<addedProductNocount>) => {
      const { id, title, brand } = action.payload;
      const productPush: addedProduct = { id, title, brand, count: 1 };
      state.push(productPush);
      console.log(action.payload);
    },
    remove: (state, action: PayloadAction<removeType>) => {
      console.log(action);

       state = state.filter((item) => item.id !== action.payload)
    },
  },
});

export const { add, remove } = Slice.actions;
export default Slice.reducer;
