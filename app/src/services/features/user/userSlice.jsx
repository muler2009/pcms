import {apiSlice} from "../../api/apiSlice";
import { API_TAGS } from "../../../constants/tagsTypes";

export const userSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => ({
                url: 'user',
                method: "GET"
                 
            }) ,
            providesTags: [API_TAGS.USER_TAG]
        }) ,

        loginUser: builder.mutation({
            query: (data) => ({
                url: `/token`,
                method: "POST",
                body: data
            }),
            invalidatesTags: [API_TAGS.USER_TAG]
        }), 
        


        
    })
})

export const { useGetUsersQuery, useLoginUserMutation } = userSlice;
