import { createSlice } from '@reduxjs/toolkit'

// is a slice for working with token state
const authSlice = createSlice({
    name: "authentication",
    initialState: { user: null, token: null },
    reducers: {
        setUsersCreditials: (state, action) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        setUsersLogOut: (state, action) => {
            state.user = null
            state.token = null
        }
    }, 
})

// exporting individual reducers
export const { setUsersCreditials, setUsersLogOut } = authSlice.actions
// exporting individual state 
export default authSlice.reducer

export const currentUser = (state) => state.authentication.user
export const currentToken = (state) => state.authentication.token
