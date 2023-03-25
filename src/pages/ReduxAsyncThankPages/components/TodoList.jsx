import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import css from "../ReduxThunkPages.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className={css.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          id={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
