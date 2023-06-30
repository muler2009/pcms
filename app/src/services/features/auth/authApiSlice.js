import { API_TAGS } from "../../../constants/tagsTypes";
import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: `api/token/`,
                method: "POST",
                body: credentials
            }),
            invalidatesTags: [API_TAGS.USER_TAG]
        })
    })
})

export const {
    useLoginMutation
} = authApiSlice