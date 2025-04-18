import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const HOST_URL = `https://schoolmanagementapis.onrender.com`;

const initialState = {
    status: 'idle',
    totalStudents: 0,
    averageAttendance: 0,
    averageMarks: 0,
    topStudent: null
}

export const fetchHealth = createAsyncThunk(
    'school/health', async () => {
        const response = await axios.get(HOST_URL + `/health`);
        return response.data;
    }
)

export const schoolSlice = createSlice({
    name: "school",
    initialState,
    reducers: {
        updateSchoolStats: (state, action) => {
            const { totalStudents, averageAttendance, averageMarks, topStudent } = action.payload

            state.totalStudents = totalStudents;
            state.averageAttendance = averageAttendance;
            state.averageMarks = averageMarks;
            state.topStudent = topStudent
        },
        setTopStudent: (state, action) => {
            state.topStudent = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHealth.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchHealth.fulfilled, (state, action) => {
                state.status = 'success';
            })
            .addCase(fetchHealth.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            })
    }
})

export const { updateSchoolStats, setTopStudent } = schoolSlice.actions;

export default schoolSlice.reducer;