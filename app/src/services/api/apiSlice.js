import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { setUsersCreditials, setUsersLogOut } from '../features/auth/authSlice';
import { BASE_URL } from '../../constants/config';
import { API_TAGS } from '../../constants/tagsTypes';

const baseQuery = fetchBaseQuery({
      baseUrl: BASE_URL,
    
      prepareHeaders: (headers, { getState }) => {
        headers.set('Content-Type', 'application/json') // setting the content type as json
        const token = getState().authentication.token // get the token value fron the auuthSlice
        
          if (token) {
            // add Authorization header with token
            headers.set('Authorization', `Bearer ${token}`)
          }
        
          return headers
        },
})
   

// custom baseQuery function to handle if the access token expires ans make api request to refresh 
const baseQueryForReauthentication = async(args, api, extraOptions) => {
    let resultFromBaseQuery = await baseQuery(args, api, extraOptions) 

    // cheking if the token is expired
    if(resultFromBaseQuery?.error?.originalStatus === 403) {
      // send a refresh to get access token
      const refreshResult = await baseQuery('api/token/refresh/', api, extraOptions)
      if(refreshResult?.data) {
        const user = api.getState().authentication.user
         // store the new token 
        api.dispatch(setUsersCreditials({user, ...refreshResult.data}))
        // retry the original query with new access token 
        resultFromBaseQuery = await baseQuery(args, api, extraOptions) 

      } 
      else {
        api.dispatch(setUsersLogOut())
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






