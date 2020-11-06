import React from "react";
import trashIcon from "../assets/images/waste-64.png";

const CartItem = ({ id, title, qtty, image_url, price, handleDelete }) => {
  return (
    <tr key={id}>
      <td>
        <img src={image_url} alt={title} />
      </td>
      <td>{title}</td>
      <td>{qtty}</td>
      <td>{Number(price) * qtty}</td>
      <td>
        <img
          className="icon"
          src={trashIcon}
          alt="Eliminar producto"
          onClick={(e) => handleDelete(e, id)}
        />
      </td>
    </tr>
  );
};

export default CartItem;
