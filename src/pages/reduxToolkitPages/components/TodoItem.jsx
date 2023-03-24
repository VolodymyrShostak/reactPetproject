import React, { useState } from "react";
import { deleteTodo, toggleComplete } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import css from "../ReduxToolkitPages.module.css";
import Modal from "./Modal";

import { AiFillDelete } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";

const TodoItem = ({ id, text, completed }) => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTodo(id));
  };

  const onChangeComplete = () => {
    dispatch(toggleComplete(id));
  };

  const changeOpenModal = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <div className={css.todoWrapper}>
      <input
        className={css.completedInput}
        type="checkbox"
        checked={completed}
        onChange={onChangeComplete}
      />
      <p className={css.todoText}>{text}</p>
      <div className={css.btnWrapper}>
        <button className={css.changeBtn} onClick={changeOpenModal}>
          <BsFillGearFill />
        </button>
        <button className={css.deleteBtn} onClick={onDelete}>
          <AiFillDelete />
        </button>
      </div>
      {openModal && (
        <Modal id={id} text={text} changeOpenModal={changeOpenModal} />
      )}
    </div>
  );
};

export default TodoItem;
