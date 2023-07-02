import { API_TAGS } from "../../constants/tagsTypes";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
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

export const {
    useLoginMutation,
    useLogoutMutation
  
} = authApiSlice