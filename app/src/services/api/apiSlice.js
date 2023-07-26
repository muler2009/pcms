import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  setAuthData,
  clearAuthData,
  csrf_token,
} from "../features/auth/authSlice";
import { BASE_URL } from "../../config/config";
import { API_TAGS } from "../../config/tagsTypes";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    headers.set("Content-Type", "application/json"); // setting the content type as json
    const token = getState().authentication.accessToken; // get the token value fron the auuthSlice
    if (token) {
      // add Authorization header with token
      headers.set("Authorization", `Bearer ${token}`);
    }
    //const csrfToken = getState().authentication.csrftoken;
    const csrfToken = Cookies.get("csrftoken");
    if (csrfToken) {
      headers.set("X-CSRFToken", csrfToken);
    }
    console.log(csrfToken);
    return headers;
  },
});

// Custom baseQuery function to handle if the access token expires ans make api request to refresh
const baseQueryForReauthentication = async (args, api, extraOptions) => {
  let resultFromBaseQuery = await baseQuery(args, api, extraOptions);

  // cheking if the token is expired
  if (resultFromBaseQuery?.error?.status === 401) {
    // send a refresh to get access token
    const refreshResult = await baseQuery(
      "api/token/refresh/",
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      const user = api.getState().authentication.user;
      const access = api.getState().authentication.accessToken;

      // store the new token
      api.dispatch(setAuthData({ ...refreshResult.data, access, user }));
      // retry the original query with new access token
      resultFromBaseQuery = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(clearAuthData());
    }
  }

  return resultFromBaseQuery;
};

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: baseQueryForReauthentication,
  tagTypes: Object.values(API_TAGS),
  refetchOnFocus: true, // to refeach the data while focusing
  refetchOnReconnect: true, // loading the data after the app is reconnected back
  endpoints: (builder) => ({}),
});
