import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: "1", text: "learn React", completed: true },
    { id: "2", text: "learn JS", completed: false },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
    changeTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, changeTodo, toggleComplete } =
  todoSlice.actions;

export default todoSlice.reducer;
