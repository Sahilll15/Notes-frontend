import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { authSlice } from './redux/auth/authSlice'
import { noteSlice } from './redux/notes/noteSlice';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
    reducer: {
        user: authSlice.reducer,
        note: noteSlice.reducer
    },
    middleware
})

export default store