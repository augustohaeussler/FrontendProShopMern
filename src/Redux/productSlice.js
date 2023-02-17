import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, getProductsDetails } from "../api/products";

const initialState = {
    product: [] ,
    productDetail: [],
    loading: false
} 


export const fetchProducts = createAsyncThunk(
    'products/fetchproducts',
    async (_, {dispatch}) => {
        dispatch(setLoading(true))
        const productsRes = await getProducts()
        dispatch(setProducts(productsRes))
        dispatch(setLoading(false))
    }
)

export const fetchProductDetail = createAsyncThunk(
    'product/fetchProductDetail',
    async (id, {dispatch}) => {
        dispatch(setLoading(true))
        const productDetailRes = await getProductsDetails(id)
        dispatch(setProductDetail(productDetailRes))
        dispatch(setLoading(false))

    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.product = action.payload
         },

         setProductDetail: (state, action) => {
            state.productDetail = action.payload
         },

         setLoading: (state, action) => {
            state.loading = action.payload
         }
         
    }
})

export const {setProducts, setProductDetail, setLoading} = productSlice.actions

export default productSlice.reducer