import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTodos,
  deleteTodo,
  addTodo,
  changeCompleted,
  changeTodo,
} from "./operations";

// const initialState = {
//   todos: [
//     { id: "1", text: "learn React", completed: true },
//     { id: "2", text: "learn JS", completed: false },
//   ],
//   isloading: false,
//   error: null,
// };

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    isloading: false,
    error: null,
  },

  reducers: {
    // changeTodo: (state, action) => {
    //   state.todos = state.todos.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return {
    //         ...todo,
    //         text: action.payload.text,
    //       };
    //     }
    //     return todo;
    //   });
    // },
  },
  extraReducers: {
    /////fetchTodos
    [fetchTodos.pending]: (state) => {
      state.isloading = true;
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.isloading = false;
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    },
    /////deleteTodo
    [deleteTodo.pending]: (state) => {
      state.isloading = true;
      state.error = null;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.isloading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    [deleteTodo.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    },
    /////addTodo
    [addTodo.pending]: (state) => {
      state.isloading = true;
      state.error = null;
    },
    [addTodo.fulfilled]: (state, action) => {
      state.isloading = false;
      state.todos = [action.payload, ...state.todos];
    },
    [addTodo.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    },
    ////changeCompleted
    [changeCompleted.pending]: (state) => {
      state.isloading = true;
      state.error = null;
    },
    [changeCompleted.fulfilled]: (state, action) => {
      state.isloading = false;
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
    [changeCompleted.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    },
    /////updateTodo
    [changeTodo.pending]: (state) => {
      state.isloading = true;
      state.error = null;
    },
    [changeTodo.fulfilled]: (state, action) => {
      state.isloading = false;
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
    [changeTodo.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    },
  },
});

export default todoSlice.reducer;
