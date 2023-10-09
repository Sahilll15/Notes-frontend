import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const host = process.env.REACT_APP_API_HOST;

export const createTodo = createAsyncThunk(
    'todo/addTodo',
    async ({ title, description, deadline }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${host}/api/v1/todo/addTodo`, {
                title,
                description,
                deadline
            }, {
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

//getTodos
export const getTodos = createAsyncThunk(
    'todo/getTodo',
    async (_, { rejectWithValue }) => {
        try {

            const response = await axios.get(`${host}/api/v1/todo/getTodo`, {
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

//getTodosBY userid
export const getTodosByUserId = createAsyncThunk(
    'todo/getTodoByUserId',
    async (userID, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/todo/getTodoByUserId/${userID}`, {
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

//updateTodo
export const updateTodo = createAsyncThunk(
    'todo/updateTodo',
    async ({ id, title, description, deadline }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${host}/api/v1/todo/update/${id}`, {
                title,
                description,
                deadline
            }, {
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


//deleteTodo
export const deleteTodo = createAsyncThunk(
    'todo/deleteTodo',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`${host}/api/v1/todo/delete/${id}`, {
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



