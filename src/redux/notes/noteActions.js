import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify'

const authToken = localStorage.getItem('authtoken');

export const getNotes = createAsyncThunk(
    'notes/getNotes',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/notes/', {
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
);



export const getFormData = createAsyncThunk(
    'notes/getFormData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/notes/getFormData', {
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
export const addNote = createAsyncThunk(
    'notes/addNote',
    async (data, { rejectWithValue }) => {
        const { name, desc, file } = data;


        const formData = new FormData();

        for (const field in data) {
            formData.append(field, data[field]);
        }

        try {
            const response = await axios.post('http://localhost:4000/api/v1/notes/', formData, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });

            if (response.status === 201) {
                console.log(response.data);
                toast.success(response.data.message);
                return response.data;
            } else {
                console.error('Error:', response.data);
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            return rejectWithValue(error.response?.data?.message);
        }
    }
);


//get notes admin

export const getNotesAdmin = createAsyncThunk(
    'notes/getNotesAdmin',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/notes/getnotesAdmin', {
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
);