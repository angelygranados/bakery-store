import React from "react";
import Card from "./Card";

const CardList = ({ products }) => {
  return (
    <div className="card_list">
      {products.map((product) => {
        return <Card key={product.id} {...product} />;
      })}
    </div>
  );
};

export default CardList;
