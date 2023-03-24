import React, { useEffect, useState } from 'react';
import css from '../redux/ReduxQuery.module.css';
import { useUpdateGoodMutation } from '../redux/goodsSlice';

import { AiFillCloseCircle } from 'react-icons/ai';

const Modal = ({  id, changeOpenModal }) => {
  const [title, setTitle] = useState('');
  
 
  const [price, setPrice] = useState('');
  const [descr, setDescr] = useState('');

  const [updateGood] = useUpdateGoodMutation();

  const onCorrectedBtnClick = async () => {
   
    try {
      await updateGood({ id, title , price, descr  });
    } catch (error) {
      console.log(error);
    }
    changeOpenModal();

    
  };

  useEffect(() => {
    const clickEsc = e => {
      if (e.code !== 'Escape') return;
      changeOpenModal();
    };

    window.addEventListener('keydown', clickEsc);

    return () => {
      window.removeEventListener('keydown', clickEsc);
    };
  }, [changeOpenModal]);

  const clickOverlay = e => {
    if (e.target.tagName !== 'DIV') return;
    changeOpenModal();
  };

  return (
    <div className={css.overlay} onClick={clickOverlay}>
      <div className={css.modal}>
        <h3 className={css.modalTitle}>Enter update data</h3>
        <input
          className={css.modalInput}
          type="text"
          onChange={e => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="new title"
        />
        <input
          className={css.modalInput}
          type="text"
          onChange={e => {
            setDescr(e.target.value);
          }}
          value={descr}
          placeholder="new description"
        />
        <input
          className={css.modalInput}
          type="text"
          onChange={e => {
            setPrice(e.target.value);
          }}
          value={price}
          placeholder="new price"
        />
        <button onClick={onCorrectedBtnClick} className={css.modalCorrectBtn}>
          UPDATE
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
