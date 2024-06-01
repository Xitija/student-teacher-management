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

export const addStudentAsync = createAsyncThunk('students/addStudentAsync', async (newStudent) => {
    const response = await axios.post(HOST_URL + `/students`, newStudent)
    return response.data;
})

export const updateStudentAsync = createAsyncThunk(
    'students/updateStudentAsync', async ({ id, updatedStudent }) => {
        const response = await axios.put(HOST_URL + `/students/${id}`, updatedStudent);
        return response.data;
    }
)

export const deleteStudentAsync = createAsyncThunk(
    'students/deleteStudentAsync', async (id) => {
        const response = await axios.delete(HOST_URL + `/students/${id}`);
        return response.data;
    }
)

const initialState = {
    students: [],
    status: 'idle',
    error: null,
    filter: "All",
    sortBy: "name"
}

export const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload
        }
    },
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
            })
            .addCase(addStudentAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addStudentAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.students.push(action.payload);
            })
            .addCase(addStudentAsync.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            })
            .addCase(updateStudentAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateStudentAsync.fulfilled, (state, action) => {
                state.status = 'success';
                const updatedStudent = action.payload;
                console.log(updatedStudent,
                    "updatedState"
                )
                const index = state.students.findIndex((s) => s.id === updatedStudent._id)
                if (index !== -1) {
                    state.students[index] = updatedStudent;
                }
            })
            .addCase(updateStudentAsync.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message
            })
            .addCase(deleteStudentAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteStudentAsync.fulfilled, (state, action) => {
                console.log(state.students , action ,"ookk")
                state.status = 'success';
                state.students = state.students.filter((student) => student._id !== action.payload.student._id)
            })
            .addCase(deleteStudentAsync.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            })
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

export const { setFilter, setSortBy } = studentsSlice.actions;

export default studentsSlice.reducer;