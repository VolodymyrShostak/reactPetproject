import React, { useEffect, useState } from "react";
import css from "../ReduxToolkitPages.module.css";

import { useDispatch } from "react-redux";
import { changeTodo } from "../redux/todoSlice";

import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ text, id, changeOpenModal }) => {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const onCorrectedBtnClick = () => {
    if (inputText.length === 0) return;
    dispatch(changeTodo({ id, text: inputText }));
    changeOpenModal();
  };

  useEffect(() => {
    const clickEsc = (e) => {
      if (e.code !== "Escape") return;
      changeOpenModal();
    };

    window.addEventListener("keydown", clickEsc);

    return () => {
      window.removeEventListener("keydown", clickEsc);
    };
  }, [changeOpenModal]);

  const clickOverlay = (e) => {
    if (e.target.tagName !== "DIV") return;
    changeOpenModal();
  };

  return (
    <div className={css.overlay} onClick={clickOverlay}>
      <div className={css.modal}>
        <h3 className={css.modalTitle}>{text}</h3>
        <input
          className={css.modalInput}
          type="text"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          value={inputText}
        />
        <button onClick={onCorrectedBtnClick} className={css.modalCorrectBtn}>
          to correct
        </button>
        <button
          onClick={() => {
            changeOpenModal();
          }}
          className={css.modalCloseBtn}
        >
          <AiFillCloseCircle />
        </button>
      </div>
    </div>
  );
};

export default Modal;
