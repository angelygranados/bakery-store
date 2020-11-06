import React from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import { removeFromCart } from "../actions/index";

const CartContainer = ({ myCart, products, removeFromCart }) => {
  function handleDelete(e, id) {
    removeFromCart(id);
  }
  let totalPrice = 0;
  myCart.forEach((product) => {
    if (products.find((item) => item.id === product.productId)) {
      let productData = products.find((item) => item.id === product.productId);
      totalPrice += productData.price * product.qtty;
    }
  });
  return (
    <section className="Shopping_cart wrapper">
      <h2>Mi carrito</h2>
      {myCart.length === 0 && <p>Aún no tienes productos en tu carrito</p>}
      {Object.keys(myCart).length > 0 && (
        <table>
          <thead>
            <tr>
              <th />
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {myCart.map((product) => (
              <CartItem
                qtty={product.qtty}
                handleDelete={handleDelete}
                {...products.find((item) => item.id === product.productId)}
              />
            ))}
            <tr key="totalProducts">
              <td />
              <td />
              <td>Total: </td>
              <td>{totalPrice}</td>
              <td />
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  ...state,
  removeFromCart,
});

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
