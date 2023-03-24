import { configureStore } from "@reduxjs/toolkit";
// import todosReducer from "./pages/reduxToolkitPages/redux/todoSlice";
import todosReducer from "./pages/ReduxAsyncThankPages/redux/todoSlice";
import { goodsApi } from "./pages/ReduxRtkQueryPage/redux/goodsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsApi.middleware),
});

setupListeners(store.dispatch);
