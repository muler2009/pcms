import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addUsers } from "./userApiSlice";

const addUser = createAsyncThunk("users/addUser", async (userData) => {
  try {
    const adduserResponse = await addUsers(userData).unwrap();
    return adduserResponse?.data;
  } catch (error) {
    return error;
  }
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const user = (state) => state.users.user;

export default userSlice.reducer;
