import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createTodo, getTodos, getTodosByUserId, updateTodo, deleteTodo } from './todoActions'

const initialState = {
    todos: [],
    loading: false,
    error: "",
    success: false,

}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(createTodo.pending, (state, action) => {
            state.loading = true;
        }).addCase(createTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload
            state.success = true
        }).addCase(createTodo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })

        builder.addCase(getTodos.pending, (state, action) => {
            state.loading = true;
        }
        ).addCase(getTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload
        }
        ).addCase(getTodos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
        )

        builder.addCase(getTodosByUserId.pending, (state, action) => {
            state.loading = true;
        }
        ).addCase(getTodosByUserId.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload
        }
        ).addCase(getTodosByUserId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
        )

        builder.addCase(updateTodo.pending, (state, action) => {
            state.loading = true;
        }
        ).addCase(updateTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload
        }
        ).addCase(updateTodo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
        )

        builder.addCase(deleteTodo.pending, (state, action) => {
            state.loading = true;
        }
        ).addCase(deleteTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload
        }
        ).addCase(deleteTodo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
        )


    }

})


export default todoSlice.reducer