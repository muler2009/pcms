import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/config';
import { API_TAGS } from '../../constants/tagsTypes';

export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json')
      const token = getState().auth.token
        if (token) {
          headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
      },
      tagTypes: Object.values(API_TAGS),
      refetchOnFocus: true, // to refeach the data while focusing 
      refetchOnReconnect: true,
    
    endpoints: (builder) => ({})

});






