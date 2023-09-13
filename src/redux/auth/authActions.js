import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'


export const register = createAsyncThunk(
    'auth/register',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:4000/api/v1/users/register',
                {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                }
            );
            if (response.status === 200) {
                console.log(response.data);
                toast.success(response.data.message);
                return response.data.user;
            } else {
                console.log('error');
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:4000/api/v1/users/login',
                {
                    email: data.email,
                    password: data.password,
                }
            );
            if (response.status === 200) {
                console.log(response.data);
                toast.success(response.data.message);
                localStorage.setItem('authtoken', response.data.token);
                return response.data.user;

            } else {
                console.log('error');
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
)

