import React from "react";

const Card = ({ id, title, image_url, price, details, category }) => {
  return (
    <div className="card" id={id}>
      <img className="card__image" src={image_url} alt={title} />
      <div className="card__content">
        <h3 className="card__content-title">{title}</h3>
        <span className="card__content-category">{category}</span>
        <span className="card__content-price">{price}</span>
      </div>
    </div>
  );
};

export default Card;
