import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// http://localhost:4000/api/v1/users/getUserInfo/6501e34bc36bdc85aed140c4
const host = process.env.REACT_APP_API_HOST;

export const getUserInfo = createAsyncThunk(
    'user/getUserInfo',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/users/getUserInfo/${userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`
                }
            })

            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            else {
                return rejectWithValue(response.data.message)
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)


export const getUsersLeaderBoard = createAsyncThunk(
    'user/getUsersLeaderBoard',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/users/getUsersLeaderBoard`)

            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            else {
                return rejectWithValue(response.data.message)
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)

