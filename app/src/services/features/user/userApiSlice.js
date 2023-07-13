import { API_TAGS } from "../../../config/tagsTypes";
import { apiSlice } from "../../api/apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsersProfile: builder.query({
            query: () => ({
                url: `user-profile/fetchUserProfile/`,
                method: "GET"
            })
        }),

        addUsers: builder.mutation({
            query: userData => ({
                url: `user-profile/adduser/`,
                method: 'POST',
                body: userData
            }),
            invalidatesTags: [API_TAGS.USER_TAG]
        }),
    })
})


export const addUsers = userApiSlice.endpoints.addUsers

export const { 
    useGetUsersProfileQuery,
    useAddUsersMutation
} = userApiSlice