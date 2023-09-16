import { createSlice } from "@reduxjs/toolkit";
import { getNotes, getFormData, addNote, getNotesAdmin, AcceptRejectNotes, getSingleNote, deleteNote, buyNote } from "./noteActions";

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
    notesAdmin: [],
    singlenote: null,
    noteAcceptStatusLoading: false,

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

        builder.addCase(AcceptRejectNotes.pending, (state, action) => {
            state.noteAcceptStatusLoading = true

        }
        ).addCase(AcceptRejectNotes.fulfilled, (state, action) => {
            state.noteAcceptStatusLoading = false
            state.success = true
            state.notesAdmin = action.payload.data;
        }
        ).addCase(AcceptRejectNotes.rejected, (state, action) => {
            state.noteAcceptStatusLoading = false;
            state.error = action.payload;
            state.success = false;
        }
        )


        builder.addCase(getSingleNote.pending, (state, action) => {
            state.noteLoading = true

        }
        ).addCase(getSingleNote.fulfilled, (state, action) => {
            state.noteLoading = false
            state.noteSuccess = true
            state.singlenote = action.payload.data;
        }
        ).addCase(getSingleNote.rejected, (state, action) => {
            state.noteLoading = false;
            state.noteError = action.payload;
            state.noteSuccess = false;
        }
        )

        builder.addCase(deleteNote.pending, (state, action) => {
            state.noteLoading = true

        }
        ).addCase(deleteNote.fulfilled, (state, action) => {
            state.noteLoading = false
            state.noteSuccess = true
            state.singlenote = action.payload.data;
        }
        ).addCase(deleteNote.rejected, (state, action) => {
            state.noteLoading = false;
            state.noteError = action.payload;
            state.noteSuccess = false;
        }
        )

        //for buying the note
        builder.addCase(buyNote.pending, (state, action) => {
            state.noteLoading = true

        }
        ).addCase(buyNote.fulfilled, (state, action) => {
            state.noteLoading = false
            state.noteSuccess = true
            state.singlenote = action.payload.data;
        }
        ).addCase(buyNote.rejected, (state, action) => {
            state.noteLoading = false;
            state.noteError = action.payload;
            state.noteSuccess = false;
        }
        )

    }
})



export default noteSlice.reducer


