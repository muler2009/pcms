import { API_TAGS } from "../../config/tagsTypes";
import { is_Authenticated } from "../features/auth/authSlice";
import { apiSlice } from "./apiSlice";
import { csrf_token } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `api/token/`,
        method: "POST",
        body: credentials,
        headers: {
          "X-CSRFToken": Cookies.get("csrftoken"), // Replace with the function to retrieve the CSRF token from your state
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: [API_TAGS.USER_TAG],
    }),

    // logout endpoint
    logout: builder.mutation({
      query: (refreshToken) => ({
        url: `api/logout/`,
        method: "POST",
        body: refreshToken,
      }),
      invalidatesTags: [API_TAGS.USER_TAG],
    }),
  }),
});

// export const getCSRFToken = authApiSlice.endpoints.getCSRFToken;
export const login = authApiSlice.endpoints.login;
export const getCSRFToken = apiSlice.endpoints.getCSRFToken;

export const { useLoginMutation, useLogoutMutation, useGetCSRFTokenQuery } =
  authApiSlice;
