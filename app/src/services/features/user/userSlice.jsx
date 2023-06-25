import apiSlice from "../../api/apiSlice";

const userSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        get: builder.query({
            query: () => ({
                url: `/users`,
                method: "GET"
                 
            })
        })
    })
})

export const { useGetQuery } = userSlice;
export default userSlice;