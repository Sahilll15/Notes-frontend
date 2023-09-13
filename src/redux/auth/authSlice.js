import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'
import { register, login } from './authActions'

const initialState = {
    user: null,
    profileUser: null,
    isAuthenticated: false,
    loading: false,
    error: "",
    success: false,
    token: "",
    followunfollowLoading: false

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
    }
})


export default authSlice.reducer