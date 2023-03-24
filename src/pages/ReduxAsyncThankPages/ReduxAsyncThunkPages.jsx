import React, { useEffect } from "react";
import FormTodos from "./components/FormTodos";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./redux/operations";

const ReduxToolkitPages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>To do list (Redux Async Thank)</h1>
      <FormTodos />
      <TodoList />
    </div>
  );
};

export default ReduxToolkitPages;
