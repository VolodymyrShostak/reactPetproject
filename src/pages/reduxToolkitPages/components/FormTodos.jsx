import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import css from "../ReduxToolkitPages.module.css";
import { nanoid } from "nanoid";

import { GoPlusSmall } from "react-icons/go";

const FormTodos = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onBtnClick = () => {
    if (text.length === 0) return;
    dispatch(
      addTodo({
        text,
        id: nanoid(),
        completed: false,
      })
    );
    setText("");
  };

  return (
    <div className={css.formWrapper}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className={css.AddTodoInput}
      />
      <button onClick={onBtnClick} className={css.addTodoBtn}>
        <GoPlusSmall size={40} className={css.addTodoIcon} />
      </button>
    </div>
  );
};

export default FormTodos;
