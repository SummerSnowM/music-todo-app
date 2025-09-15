import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload);
            state.splice(index, 1);
        },
        changeStatus: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload);
            state[index].complete = !state[index].complete;
        },
        editTodo: (state, action) => {
            const { id, item } = action.payload;
            const index = state.findIndex(todo => todo.id === id);
            state[index] = item;
        }
    }
})

export const { addTodo, deleteTodo, changeStatus, editTodo } = todoSlice.actions;

export default todoSlice.reducer;