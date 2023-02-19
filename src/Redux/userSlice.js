import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postLoginUser } from "../api/users";

const initialState = {
    userInfo: null,
    error: null,
    loading: false
}

export const loginFunction = createAsyncThunk( 
    'userSlice/login',
    async ({email, password}, {dispatch}) => {
    
        const loginResponse = await postLoginUser()

        if(loginResponse.message) {
            dispatch(loginFail(loginResponse.message))
        }else {
              dispatch(loginSucces(loginResponse))
        }
 
    }
 )

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
        loginSucces: (state, action) => {
            state.user = action.payload
        },

        loginFail: (state, action) => {
            state.error = action.payload
        }

    }
})

export const {loginSucces, loginFail} = userSlice.actions

export default userSlice.reducer