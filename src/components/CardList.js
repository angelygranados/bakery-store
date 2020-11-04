import React from "react";
import Card from "./Card";

const CardList = ({
  products,
  handleFavorites,
  myFavorites,
  handleCart,
  myCart,
  handleQtty,
}) => {
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
            myCart={myCart}
            handleQtty={handleQtty}
          />
        );
      })}
    </div>
  );
};

export default CardList;
