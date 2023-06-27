import apiSlice from "../../api/apiSlice";

const userSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        get: builder.query({
            query: () => ({
                url: `/users`,
                method: "GET"
                 
            })
        }) ,

        addUser: builder.mutation({
            query: (data) => ({
                url: `/users`,
                method: "POST",
                body: data
            })
        })
    })
})

export const { useGetQuery, useAddUserMutation } = userSlice;
export default userSlice;