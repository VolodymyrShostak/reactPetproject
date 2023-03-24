import { configureStore } from "@reduxjs/toolkit";
// import todosReducer from "./pages/reduxToolkitPages/redux/todoSlice";
import todosReducer from "./pages/ReduxAsyncThankPages/redux/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
