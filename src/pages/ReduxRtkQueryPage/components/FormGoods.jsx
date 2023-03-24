import React from "react";
import { useState } from "react";
import { useAddGoodMutation } from "../redux/goodsSlice";
import css from "../redux/ReduxQuery.module.css";

import { GoPlusSmall } from "react-icons/go";

const FormGoods = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");

  const [addGood, { isLoading, isError }] = useAddGoodMutation();

  console.log("isLoading", isLoading);
  console.log("isError", isError);

  const resetForm = () => {
    setTitle("");
    setPrice("");
    setDescr("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const card = { title, price, descr };
    try {
      if (title.trim() === "" || price.trim() === "" || descr.trim() === "") {
        return;
      }

      const { data: res, error } = await addGood(card);

      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={css.form}>
      <input
        className={css.formInput}
        type="text"
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
        placeholder="Title"
      />
      <input
        className={css.formInput}
        type="text"
        value={descr}
        onChange={e => {
          setDescr(e.target.value);
        }}
        placeholder="Description"
      />
      <input
        className={css.formInput}
        type="text"
        value={price}
        onChange={e => {
          setPrice(e.target.value);
        }}
        placeholder="Price"
      />

      <button className={css.formBtn}
        type="submit" onClick={onSubmit}>
        ADD
      </button>
    </form>
  );
};

export default FormGoods;
