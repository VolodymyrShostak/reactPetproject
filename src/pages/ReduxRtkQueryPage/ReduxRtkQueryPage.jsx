import React from "react";
import FormGoods from "./components/FormGoods";
import GoodsList from "./components/GoodsList";

const ReduxRtkQueryPage = () => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
       flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 10,
      }}
    >
      
      <h1 style={{marginBottom: 25 , color: "orange"  }}>Redux RTK-Query Page</h1>
      <FormGoods />
      <GoodsList />
    </div>
  );
};

export default ReduxRtkQueryPage;
