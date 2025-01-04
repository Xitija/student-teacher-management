import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const HOST_URL = `https://2c463a04-897a-4e5a-9fd7-ae15835b9731-00-2gwpouugm900g.picard.replit.dev`;

export const fetchTeachers = createAsyncThunk(
    'teachers/fetchTeachers', async () => {
        const response = await axios.get(HOST_URL + `/teachers`);
        return response.data
    }
)

export const addTeacherAsync = createAsyncThunk(
    'teachers/addTeacher', async (newTeacher) => {
        const response = await axios.post(HOST_URL + `/teachers`, newTeacher)
        return response.data;
    }
)

export const updateTeacherAsync = createAsyncThunk(
    'teachers/updateTeacherAsync', async ({ id, updatedTeacher }) => {
        const response = await axios.put(HOST_URL + `/teachers/${id}`, updatedTeacher);
        return response.data;
    }
)

export const deleteTeacherAsync = createAsyncThunk(
    'teachers/deleteTeacherAsync', async (id) => {
        const response = await axios.delete(HOST_URL + `/teachers/${id}`);
        return response.data
    }
)

const initialState = {
    teachers: [],
    status: 'idle',
    error: null
}

export const teachersSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeachers.pending,
                (state) => {
                    state.status = 'loading';
                })
            .addCase(fetchTeachers.fulfilled, (state, action) => {
                state.status = 'success';
                state.teachers = action.payload;
            })
            .addCase(fetchTeachers.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            })
            .addCase(addTeacherAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addTeacherAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.teachers.push(action.payload)
            })
            .addCase(addTeacherAsync.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            })
            .addCase(updateTeacherAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateTeacherAsync.fulfilled, (state, action) => {
                state.status = 'success';
                const updatedTeacher = action.payload;
                const index = state.teachers.findIndex((t) => t._id === updatedTeacher._id)
                if (index !== -1) {
                    state.teachers[index] = updatedTeacher
                }
            })
            .addCase(updateTeacherAsync.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message
            })
            .addCase(deleteTeacherAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteTeacherAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.teachers = state.teachers.filter((teacher) => teacher._id !== action.payload)
            })
            .addCase(deleteTeacherAsync.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message
            })
    }
})

export default teachersSlice.reducer;