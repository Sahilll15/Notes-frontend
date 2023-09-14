import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'
import { register, login, resetPassword, getLogedinUser } from './authActions'


const initialState = {
    user: null,
    profileUser: null,
    isAuthenticated: false,
    loading: false,
    error: "",
    success: false,
    token: "",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state, action) => {
            state.loading = true

        }).addCase(register.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.user = action.payload
        }).addCase(register.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(login.pending, (state, action) => {
            state.loading = true
        }
        ).addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.user = action.payload
        }).addCase(login.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }
        )

        //reset password
        builder.addCase(resetPassword.pending, (state, action) => {
            state.loading = true
        }
        ).addCase(resetPassword.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            toast.success(action.payload.message)
        }
        ).addCase(resetPassword.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            toast.error(action.payload)
        }
        )

        // builder.addCase(getLogedinUser.pending, (state, action) => {
        //     state.loading = true
        // }).addCase(getLogedinUser.fulfilled, (state, action) => {
        //     state.loading = false,
        //         state.success = true
        //     toast.success(action.payload.message)
        // }).addCase(getLogedinUser.rejected, (state, action) => {
        //     state.loading = false,

        // })

    }
})


export default authSlice.reducer