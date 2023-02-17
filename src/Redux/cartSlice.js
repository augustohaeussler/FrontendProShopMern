import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsDetails } from "../api/products";


const cartItemsFromStorage = localStorage.getItem('cartItem') ? 
JSON.parse(localStorage.getItem('cartItem')) : []


const initialState = {
    cartItems: cartItemsFromStorage
    
}

export const fetchAddToCart = createAsyncThunk(
    'addToCart/fetchAddToCart',
    async ({id, quantity}, {dispatch, getState}) => {
       
        
        const productItemRes = await getProductsDetails(id)
        dispatch(setAddToCart({
            id: productItemRes._id,
            name: productItemRes.name,
            image: productItemRes.image,
            price: productItemRes.price,
            countInStock: productItemRes.countInStock,
            quantity
    
        }))

        localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItems))
    }
    
    

)

export const fetchRemoveToCard = createAsyncThunk(
    'addToCart/fetchRemoveToCArt',
    async (id, {dispatch, getState}) => {
        const productItem = await getProductsDetails(id)
        dispatch(setRemoveToCart(productItem._id))

        localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItems))

    }

)

export const CartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers: {
        setAddToCart: (state, action) => {
               
            const item = action.payload
            const existItem = state.cartItems.find( (x) => x.id === item.id )
            
            if(existItem) {
                return{

                    cartItems: state.cartItems.map( (x) => x.id === existItem.id
                         ? item : x )
                }
            }else {
                state.cartItems.push(item)        
            } 
        
        },

        setRemoveToCart: (state, action) => {
            
            return {
                cartItems: state.cartItems.filter(x=> x.id !== action.payload)   
            }
        }
    }

})


export const {setAddToCart, setRemoveToCart} = CartSlice.actions

export default CartSlice.reducer

