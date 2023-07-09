import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addUsers } from "./userApiSlice";

const add_user = createAsyncThunk(
    "users/addusers", async(userData) => {
        try {
            const adduserResponse = await addUsers(userData).unwrap()
            return adduserResponse?.data

        }catch(error) {
            return error
        }
    }
)

const userSlice = createSlice({
    name: "users",
    initialState: {
        user: [],
        isLoading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(add_user.fulfilled, (state, action) => {
                state.user = action.payload.user
            })
    }  
})


export const user = (state) => state.users.user

export default userSlice.reducer


