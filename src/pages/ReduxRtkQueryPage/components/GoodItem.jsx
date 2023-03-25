import React, { useState } from 'react';

import { AiFillDelete } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import css from '../ReduxQuery.module.css';

import { useDeleteGoodMutation } from '../redux/goodsSlice';
import Modal from './Modal';

const GoodItem = ({ title, descr, price, id }) => {
  const [openModal, setOpenModal] = useState(false);

  const [deleteGood] = useDeleteGoodMutation();

  const onDelete = async () => {
    try {
      await deleteGood(id);
    } catch (error) {
      console.log(error);
    }
  };

  // const onChangeComplete = () => {};

  const changeOpenModal = () => {
    setOpenModal(prevState => !prevState);
  };

  return (
    <div className={css.card}>
      <h3>{title}</h3>
      <p>{descr}</p>
      <p>
        Price: <span style={{ fontWeight: 600 }}>{price}$</span>{' '}
      </p>

      <div className={css.btnWrapper}>
        <button onClick={changeOpenModal} className={css.changeBtn}>
          <BsFillGearFill />
        </button>
        <button onClick={onDelete} className={css.deleteBtn}>
          <AiFillDelete />
        </button>
      </div>
      {openModal && (
        <Modal
          id={id}
          price={price}
          title={title}
          descr={descr}
          changeOpenModal={changeOpenModal}
        />
      )}
    </div>
  );
};

export default GoodItem;
