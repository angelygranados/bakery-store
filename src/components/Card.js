import React from "react";
import addToCart from "../assets/images/add-shopping-cart-64.png";
import heartIcon from "../assets/images/heart-64.png";
import fullHeartIcon from "../assets/images/fullHeartIcon.png";
import plusIcon from "../assets/images/plus-64.png";
import lessIcon from "../assets/images/less-64.png";

const Card = ({
  id,
  title,
  image_url,
  price,
  category,
  handleFavorites,
  myFavorites,
  myCart,
  handleCart,
  handleQtty,
}) => {
  let productQtty = null;
  if (myCart.find((product) => product.productId === id) !== undefined) {
    productQtty = myCart.filter((product) => product.productId === id)[0].qtty;
  }
  const favorite =
    myFavorites.find((product) => product.id === id) !== undefined
      ? fullHeartIcon
      : heartIcon;

  return (
    <div className="card" id={id}>
      <img className="card__image" src={image_url} alt={title} />
      <div className="card__content">
        <h3 className="card__content-title">{title}</h3>
        <span className="card__content-category">{category}</span>
        <span className="card__content-price">{price}</span>
      </div>
      <div className="card__counter">
        <img
          src={favorite}
          alt="Agregar a mis favoritos"
          onClick={(e) => handleFavorites(e)}
          name={id}
        />
        {productQtty && (
          <div className="countButtons">
            <img
              src={lessIcon}
              name="less"
              alt="less"
              onClick={(e) => handleQtty(e, id, productQtty)}
            />
            <span>{productQtty} </span>
            <img
              src={plusIcon}
              name="more"
              alt="plus"
              onClick={(e) => handleQtty(e, id, productQtty)}
            />
          </div>
        )}
        {!productQtty && (
          <img
            src={addToCart}
            alt="Agregar al carrito"
            name={id}
            onClick={(e) => handleCart(e)}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
