import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

import { getUserInfo, getUsersLeaderBoard, getUserProfile, editProfile } from './userActions'

const initialState = {
    userDetails: {},
    leaderBoard: [],
    userDetailsLoading: false,
    error: '',
    userProfile: {}
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

        builder.addCase(getUserProfile.pending, (state, action) => {
            state.userDetailsLoading = true;
        })

        builder.addCase(getUserProfile.fulfilled, (state, action) => {
            state.userDetailsLoading = false;
            state.userProfile = action.payload.user;
        })

        builder.addCase(getUserProfile.rejected, (state, action) => {
            state.userDetailsLoading = false;
            state.error = action.payload;
        })


        //edit profile redux 
        builder.addCase(editProfile.pending, (state, action) => {
            state.userDetailsLoading = true;
        })

        builder.addCase(editProfile.fulfilled, (state, action) => {
            state.userDetailsLoading = false;
            state.userDetails = action.payload;
        })

        builder.addCase(editProfile.rejected, (state, action) => {
            state.userDetailsLoading = false;
            state.error = action.payload;
        })




    }
})




