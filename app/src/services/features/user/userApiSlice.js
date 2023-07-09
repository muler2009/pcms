import { API_TAGS } from "../../../config/tagsTypes";
import { apiSlice } from "../../api/apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addUsers: builder.mutation({
            query: userData => ({
                url: `api/register/`,
                method: 'POST',
                body: userData
            }),
            invalidatesTags: [API_TAGS.USER_TAG]
        }),
    })
})


export const addUsers = userApiSlice.endpoints.addUsers

export const { 
    useAddUsersMutation
} = userApiSlice