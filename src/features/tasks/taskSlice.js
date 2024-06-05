import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push({ ...action.payload, id: state.length + 1 });
        },
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },
    },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
