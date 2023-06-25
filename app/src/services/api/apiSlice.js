import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';
import { BASE_URL } from '../../constants/config';

const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: builder => ({})
})


export default apiSlice;



