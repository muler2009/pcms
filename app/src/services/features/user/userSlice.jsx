import apiSlice from "../../api/apiSlice";

const userSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        get: builder.query({
            query: () => ({
                
            })
        })
    })
})