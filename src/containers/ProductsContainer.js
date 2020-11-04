import React from "react";
import { connect } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  addToCart,
} from "../actions/index";
import CardList from "../components/CardList";

const ProductsContainer = ({
  products,
  myFavorites,
  addToFavorites,
  removeFromFavorites,
  addToCart,
}) => {
  function handleCart(e) {
    const productId = Number(e.target.name);
    const selectedProduct = products.find(
      (product) => productId === product.id
    );
    addToCart(selectedProduct);
  }
  function handleFavorites(e) {
    const productId = Number(e.target.name);
    const selectedProduct = products.find(
      (product) => productId === product.id
    );
    if (myFavorites.length > 0) {
      const productIsFavorite = myFavorites.find(
        (product) => productId === product.id
      );
      if (productIsFavorite !== undefined) {
        removeFromFavorites(productId);
      } else {
        addToFavorites(selectedProduct);
      }
    } else {
      addToFavorites(selectedProduct);
    }
  }
  return (
    <section
      className={
        window.location.pathname === "/favoritos"
          ? "wrapper favorites"
          : "wrapper products"
      }
    >
      <h2>
        {window.location.pathname === "/favoritos"
          ? "Mis Favoritos"
          : "Productos"}
      </h2>
      {Object.keys(myFavorites).length === 0 &&
        window.location.pathname === "/favoritos" && (
          <>
            <p>Todavía no tienes favoritos</p>
            <CardList
              products={products}
              handleFavorites={handleFavorites}
              myFavorites={myFavorites}
              handleCart={handleCart}
            />
          </>
        )}
      <CardList
        products={
          window.location.pathname === "/favoritos" ? myFavorites : products
        }
        handleFavorites={handleFavorites}
        myFavorites={myFavorites}
        handleCart={handleCart}
      />
    </section>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state,
    addToFavorites,
    removeFromFavorites,
    addToCart,
  };
};

const mapDispatchToProps = {
  addToFavorites,
  removeFromFavorites,
  addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
