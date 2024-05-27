import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const HOST_URL = `https://2c463a04-897a-4e5a-9fd7-ae15835b9731-00-2gwpouugm900g.picard.replit.dev`;

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
    console.log("test");
    const response = await axios.get(HOST_URL + `/students`);
    console.log(response, "ok");
    return response.data;
})

const initialState = {
    students: [],
    status: 'idle',
    error: null
}

export const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.status = 'success';
                console.log(action.payload, "appp")
                state.students = action.payload;
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            });
        // [fetchStudents.pending]: (state) => {
        //     state.status = "loading"
        // },
        // [fetchStudents.fulfilled]: (state, action) => {
        //     state.state = "success"
        //     state.students = action.payload
        // },
        // [fetchStudents.rejected]: (state, action) => {
        //     state.status = "error"
        //     console.log(action.error.message)
        //     state.error = action.error.message
        // }
    }
})