import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useLoginMutation, useLogoutMutation } from '../../api/authApiSlice'

export const login = createAsyncThunk(
    'auth/login', async(credential) => {
        try {
            const response = await useLoginMutation(credential).unwrap()
            return response?.data
        } catch(error){
            console.log(error)
        }
    }    
);

export const logout = createAsyncThunk(
    'auth/logout', async(logoutData) => {
        try {
            const response = await useLogoutMutation(logoutData).unwrap()
            return response?.data;

        } catch(error) {
            console.log(error)
        }
    }
);


// is a slice for working with token state
const initialState = {
    isAuthenticated: false,
    user: null,
    accessToken: localStorage.getItem('token') || null,
    refreshToken: localStorage.getItem('refesh_token') || null
}
const authSlice = createSlice({
    name: "authentication",
    initialState: initialState,
    reducers: {
        setAuthData: (state, action) => {
            const { user, access, refresh } = action.payload
            state.isAuthenticated = true;
            state.user = user;
            state.accessToken = access;
            state.refreshToken =  refresh;
            localStorage.setItem("token", access);
            
        },
        clearAuthData: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            localStorage.removeItem("token");
        }
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            // Just Invoking the setAuthData reducers of when login fullfilled
            builder.addCase(setAuthData(action.payload))
        })
        .addCase(logout.fulfilled, (state,action) => {
            // Just Invoking the setAuthData reducers of when login fullfilled
            builder.addCase(clearAuthData())
        })
    }
})

// exporting individual reducers
export const { setAuthData, clearAuthData } = authSlice.actions
// exporting individual state 
export default authSlice.reducer

//export const currentUser = (state) => state.authentication.user
export const currentUser = (state) => state.authentication.user
export const access_token = (state) => state.authentication.accessToken
export const refesh_token = (state) => state.authentication.refreshToken



