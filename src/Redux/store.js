import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

export default configureStore({
    reducer: {
        productsState: productSlice,
        cart: cartSlice
        
    }
})