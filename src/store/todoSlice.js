import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: { todos: [] },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload)
            toggleTodo.completed = !toggleTodo.completed;
        },
        editTodo: (state, action) => {
            const { id, text, completed } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.id = id;
                existingTodo.text = text;
                existingTodo.completed = completed;
            }
        }
    }
})

export const { addTodo, deleteTodo, toggleTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;