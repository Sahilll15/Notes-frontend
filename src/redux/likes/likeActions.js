import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const authToken = localStorage.getItem('authtoken');

export const likeUnlikeNote = createAsyncThunk(
    'like/likeUnlikePost',
    async (noteId, { rejectWithValue }) => {
        try {
            const response = await axios.post(`localhost:4000/api/v1/likes/likeUnlikeNote/${noteId}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            } else {
                console.log('error');
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }

)



