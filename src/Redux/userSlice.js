import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    loading: false
}

export const login = createAsyncThunk( 
    'userSlice/login',
    async ({email, password}, {dispatch}) => {

    }
 )

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export default userSlice.reducer