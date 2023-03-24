import React from "react";
import FormTodos from "./components/FormTodos";
import TodoList from "./components/TodoList";

const ReduxToolkitPages = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>To do list (Redux Tool Kit) </h1>
      <FormTodos />
      <TodoList />
    </div>
  );
};

export default ReduxToolkitPages;
