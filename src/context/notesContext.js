import React, { createContext, useContext, useState } from "react";
import axios from 'axios';
import host from '../utils/constants';
import { toast } from 'react-toastify';


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTM5MjZmY2Q3N2ZjOWJjMjZkNjAxYyIsInVzZXJuYW1lIjoic2FoaWxjaGFsa2UiLCJlbWFpbCI6InNhaGlsY2hhbGtlMTAxMUBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJ1c2VyIiwiY29pbnMiOjEzNSwiaXNWZXJpZmllZCI6dHJ1ZSwidG9kb3MiOltdLCJpYXQiOjE2OTI3MjcwNzMsImV4cCI6MTY5MjczMDY3M30.s3x8ahaHeEnwsZNtUamrfdQ3sCplc_1w9EmlfMox60c';
const NoteContext = createContext();

export const useNote = () => {
    return useContext(NoteContext);
}


export const NoteProvider = ({ children }) => {
    const [AddNoteFormData, setAddNoteFormData] = useState([]);

    //get the data such as subjects and branch from the database
    const getFormDataAPI = () => {
        axios.get(`${host}api/v1/notes/getFormData`)
            .then((res) => {
                setAddNoteFormData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // Adding of the notes
    const addNote = async (NoteData) => {
        console.log(NoteData);
        const { name, desc, file } = NoteData;

        // Create a FormData object to handle file attachment
        const formData = new FormData();

        for (const field in NoteData) {
            formData.append(field, NoteData[field]);
            console.log(field)
        }
        try {
            const response = await axios.post(`${host}api/v1/notes/`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 201) {
                toast.success('Note added successfully!!');
                return true;
            } else {
                toast.error('Note addition failed!!');
            }

        } catch (error) {
            toast.error('An error occurred while adding the note.');
            console.error(error);
        }
    }


    const contextValue = {
        AddNoteFormData,
        getFormDataAPI,
        addNote
    }


    return (
        <NoteContext.Provider value={contextValue}>
            {children}
        </NoteContext.Provider>

    )
}
