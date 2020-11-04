import React from "react";
import Card from "./Card";

const CardList = ({ products, handleFavorites, myFavorites, handleCart }) => {
  return (
    <div className="card_list">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            {...product}
            handleFavorites={handleFavorites}
            myFavorites={myFavorites}
            handleCart={handleCart}
          />
        );
      })}
    </div>
  );
};

export default CardList;
