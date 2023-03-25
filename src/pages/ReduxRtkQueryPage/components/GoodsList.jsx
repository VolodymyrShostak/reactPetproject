import React from "react";
import GoodItem from "./GoodItem";
import css from "./ReduxQuery.module.css";

import { useGetGoodsQuery } from "../redux/goodsSlice";

const GoodsList = () => {
  
  const { data } = useGetGoodsQuery();
  
 
  return (
    <div className={css.list} >
     
      {data &&
        data.map((good) => (
          <GoodItem
            key={good.id}
            title={good.title}
            descr={good.descr}
            price={good.price}
            id={good.id}
          />
        ))}
    </div>
  );
};

export default GoodsList;
