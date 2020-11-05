import React from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";

const CartContainer = ({ myCart, products }) => {
  console.log(myCart, products);
  return (
    <section className="Shopping_cart wrapper">
      <h2>Mi carrito</h2>
      <table>
        <thead>
          <tr>
            <th />
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {myCart.map((product) => (
            <CartItem
              qtty={product.qtty}
              {...products.find((item) => item.id === product.productId)}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
