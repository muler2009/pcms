import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useLoginMutation, useLogoutMutation, getCSRFToken } from '../../api/authApiSlice'


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

export const getcsrfToken = createAsyncThunk(
    'auth/getcsrfToken', async() => {
        try{
            const response = await getCSRFToken().unwrap()
            return response?.data.csrftoken
        }catch(error){
            console.log(error)
        }
    }
)

// is a slice for working with token state
const initialState = {
    isAuthenticated: false,
    user: null,
    accessToken: localStorage.getItem('token') || null,
    refreshToken: localStorage.getItem('refesh') || null,
    csrftoken: null
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
            localStorage.setItem("refresh", refresh);
            
        },
        clearAuthData: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            localStorage.removeItem("token");
            localStorage.removeItem("refresh");

        },
        setCsrfToken: (state, action) => {
            state.csrftoken = action.payload; 
        }
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            // Just Invoking the setAuthData reducers of when login fullfilled
            setAuthData(state, action)
        })
        .addCase(logout.fulfilled, (state,action) => {
            // Just Invoking the setAuthData reducers of when login fullfilled
            clearAuthData(state)
        })
        .addCase(getcsrfToken.fulfilled, (state, action) => {
            setCsrfToken(state, action)
        })
    }
})

// exporting individual reducers
export const { setAuthData, clearAuthData, setCsrfToken } = authSlice.actions
// exporting individual state 
export default authSlice.reducer

//export const currentUser = (state) => state.authentication.user
export const currentUser = (state) => state.authentication.user
export const access_token = (state) => state.authentication.accessToken
export const refesh_token = (state) => state.authentication.refreshToken
export const csrftoken = (state) => state.authentication.csrftoken




