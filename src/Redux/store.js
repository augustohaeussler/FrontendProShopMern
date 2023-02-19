import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer: {
        userLogin: userSlice,
        productsState: productSlice,
        cart: cartSlice
   
        
    }
})