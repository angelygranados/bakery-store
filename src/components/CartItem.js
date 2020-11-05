import React from "react";

const CartItem = ({ id, title, qtty, image_url, price }) => {
  return (
    <tr key={id}>
      <td>
        <img src={image_url} alt={title} />
      </td>
      <td>{title}</td>
      <td>{qtty}</td>
      <td>{Number(price) * qtty}</td>
    </tr>
  );
};

export default CartItem;
