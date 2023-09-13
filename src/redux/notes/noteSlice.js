import { createSlice } from "@reduxjs/toolkit";
import { getNotes, getFormData, addNote, getNotesAdmin } from "./noteActions";

const initialState = {
    notes: [],
    loading: false,
    error: "",
    success: false,
    note: null,
    noteLoading: false,
    noteError: "",
    noteSuccess: false,
    formData: null,
    branches: [],
    subjects: [],
    notesAdmin: []
}


export const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
    }
    ,
    extraReducers: (builder) => {
        builder.addCase(getNotes.pending, (state, action) => {
            state.loading = true

        }).addCase(getNotes.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.notes = action.payload.data
        }).addCase(getNotes.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        })

        builder.addCase(getFormData.pending, (state, action) => {
            state.loading = true

        }
        ).addCase(getFormData.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.formData = action.payload.data
            state.branches = action.payload.data.branches
            state.subjects = action.payload.data.subject
        }
        ).addCase(getFormData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        }
        )

        builder.addCase(addNote.pending, (state, action) => {
            state.noteLoading = true

        }
        ).addCase(addNote.fulfilled, (state, action) => {
            state.noteLoading = false
            state.noteSuccess = true
            state.note = action.payload.data
        }
        ).addCase(addNote.rejected, (state, action) => {
            state.noteLoading = false;
            state.noteError = action.payload;
            state.noteSuccess = false;
        }
        )

        builder.addCase(getNotesAdmin.pending, (state, action) => {
            state.loading = true

        }
        ).addCase(getNotesAdmin.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.notesAdmin = action.payload.data;
        }
        ).addCase(getNotesAdmin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        }
        )
    }
})

export default noteSlice.reducer


