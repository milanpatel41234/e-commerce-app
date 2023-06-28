import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  key: undefined,
};

const CartSlice = createSlice({
  name: "CartState",
  initialState,
  reducers: {
    AddCartItem: (state, action) => {
      state.items = action.payload;
    },
    AddKey: (state, action) => {
      state.key = action.payload;
    },
  },
});

export default CartSlice;
