import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import AuthSlice from "./AuthSlice";

const store = configureStore({
    reducer: {CartSlice: CartSlice.reducer , AuthSlice: AuthSlice.reducer},
})
export const CartAction = CartSlice.actions;
export const AuthAction = AuthSlice.actions;
export default store;