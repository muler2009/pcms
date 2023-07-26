import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useLoginMutation, useLogoutMutation } from "../../api/authApiSlice";
import { apiSlice, baseQueryForReauthentication } from "../../api/apiSlice";
import { useGetCSRFTokenQuery, getCSRFToken } from "../../api/authApiSlice";
import { BASE_URL } from "../../../config/config";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const response = await login(credentials).unwrap();
    return response?.data;
  } catch (error) {
    console.log(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async (logoutData) => {
  try {
    const response = await useLogoutMutation(logoutData).unwrap();
    return response?.data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchCSRFToken = createAsyncThunk(
  "auth/fetchCSRFToken",
  async () => {
    const response = await apiSlice.get(`api/csrf_token/`);
    return response.data.csrfToken;
  }
);

// is a slice for working with token state
const initialState = {
  csrftoken: null,
  isAuthenticated: localStorage.getItem("isAuthenticated") || false,
  user: null,
  accessToken: localStorage.getItem("token") || null,
  refreshToken: localStorage.getItem("refesh") || null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    setAuthData: (state, action) => {
      const { user, access, refresh, csrftoken } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.accessToken = access;
      state.refreshToken = refresh;
      state.csrftoken = action.payload;
      localStorage.setItem("token", access);
      localStorage.setItem("refresh", refresh);
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
    },
    clearAuthData: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.csrftoken = null;
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      localStorage.removeItem("isAuthenticated", JSON.stringify(false));
    },
    // setCsrfToken: (state, action) => {
    //   state.csrftoken = action.payload;
    //   console.log("csrftoken:", state.csrftoken);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        // Just Invoking the setAuthData reducers of when login fullfilled
        setAuthData(state, action);
      })
      .addCase(logout.fulfilled, (state) => {
        // Just Invoking the setAuthData reducers of when login fullfilled
        clearAuthData(state);
      })
      .addCase(fetchCSRFToken.fulfilled, (state, action) => {
        state.csrftoken = action.payload;
      });
  },
});

// exporting individual reducers
export const { setAuthData, clearAuthData, setCsrfToken } = authSlice.actions;
// exporting individual state
export default authSlice.reducer;

export const currentUser = (state) => state.authentication.user;
export const access_token = (state) => state.authentication.accessToken;
export const refesh_token = (state) => state.authentication.refreshToken;
export const is_Authenticated = (state) => state.authentication.isAuthenticated;
export const csrf_token = (state) => state.authentication.csrftoken;
