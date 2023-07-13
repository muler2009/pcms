import { API_TAGS } from "../../config/tagsTypes";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCSRFToken: builder.query({
            query: () => ({
                url: `api/csrf_cookie/`,
                method: "GET"
            })
        }),
        login: builder.mutation({
            query: credentials => ({
                url: `api/token/`,
                method: "POST",
                body: credentials
            }),
            invalidatesTags: [API_TAGS.USER_TAG]
        }),

        // logout endpoint
        logout: builder.mutation({
            query: refreshToken => ({
                url: `api/logout/`,
                method: "POST",
                body: refreshToken
            }),
            invalidatesTags: [API_TAGS.USER_TAG]
        })
       
    })
})

export const getCSRFToken = authApiSlice.endpoints.getCSRFToken 

export const {
    useLoginMutation,
    useLogoutMutation,
    useGetCSRFTokenQuery
  
} = authApiSlice