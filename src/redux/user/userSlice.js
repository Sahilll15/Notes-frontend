import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

import { getUserInfo, getUsersLeaderBoard } from './userActions'

const initialState = {
    userDetails: {},
    leaderBoard: [],
    userDetailsLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUserDetails: (state) => {
            state.userDetails = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserInfo.pending, (state, action) => {
            state.userDetailsLoading = true;
        })
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            state.userDetailsLoading = false;
            state.userDetails = action.payload.userDetails;
        })
        builder.addCase(getUserInfo.rejected, (state, action) => {
            state.userDetailsLoading = false;
            state.error = action.payload;
        })

        builder.addCase(getUsersLeaderBoard.pending, (state, action) => {
            state.userDetailsLoading = true;
        })

        builder.addCase(getUsersLeaderBoard.fulfilled, (state, action) => {
            state.userDetailsLoading = false;
            state.leaderBoard = action.payload;
        })

        builder.addCase(getUsersLeaderBoard.rejected, (state, action) => {
            state.userDetailsLoading = false;
            state.error = action.payload;
        })

    }
})




