import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { setAuthData, clearAuthData } from '../features/auth/authSlice';
import { BASE_URL } from '../../config/config';
import { API_TAGS } from '../../config/tagsTypes';

const baseQuery = fetchBaseQuery({
      baseUrl: BASE_URL,   
      
      prepareHeaders: (headers, { getState }) => {
        headers.set('Content-Type', 'application/json') // setting the content type as json
       
        const token = getState().authentication.accessToken // get the token value fron the auuthSlice 
        const csrftoken = getState().authentication.csrftoken // get the csrf token value fron the authSlice                      
            if (token) {
              // add Authorization header with token
              headers.set('Authorization', `Bearer ${token}`)
            } 
            if (csrftoken) {
              headers.set( 'X-CSRFToken', csrftoken,);
            }
          return headers
        },
})
   

// Custom baseQuery function to handle if the access token expires ans make api request to refresh 
const baseQueryForReauthentication = async(args, api, extraOptions) => {
    let resultFromBaseQuery = await baseQuery(args, api, extraOptions) 

    // cheking if the token is expired
    if(resultFromBaseQuery?.error?.status === 401) {
      // send a refresh to get access token
      const refreshResult = await baseQuery('api/token/refresh/', api, extraOptions)
      if(refreshResult?.data) {
        const user = api.getState().authentication.user
        const access = api.getState().authentication.accessToken
        
         // store the new token 
        api.dispatch(setAuthData({...refreshResult.data, access, user}))
        // retry the original query with new access token 
        resultFromBaseQuery = await baseQuery(args, api, extraOptions) 

      } 
      else {
        api.dispatch(clearAuthData())
      }
    }

    return resultFromBaseQuery
}

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: baseQueryForReauthentication,
  tagTypes: Object.values(API_TAGS),
  refetchOnFocus: true, // to refeach the data while focusing 
  refetchOnReconnect: true, // loading the data after the app is reconnected back
  endpoints: (builder) => ({})
})






