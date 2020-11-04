import React, { cloneElement } from "react";
import { connect } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  addToCart,
  updateProductsCart,
  removeFromCart,
} from "../actions/index";
import CardList from "../components/CardList";

const ProductsContainer = ({
  products,
  myFavorites,
  addToFavorites,
  removeFromFavorites,
  addToCart,
  myCart,
  updateProductsCart,
  removeFromCart,
}) => {
  function handleCart(e) {
    const productId = Number(e.target.name);
    const product = { productId: productId, qtty: 1 };
    addToCart(product);
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
  function handleQtty(e, id, productQtty) {
    if (e.target.name === "more") {
      const productPlus = { productId: id, qtty: productQtty + 1 };
      updateProductsCart(productPlus);
    } else {
      if (productQtty == 1) {
        removeFromCart(id);
      } else {
        const productLess = { productId: id, qtty: productQtty - 1 };
        updateProductsCart(productLess);
      }
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
              myCart={myCart}
              handleQtty={handleQtty}
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
        myCart={myCart}
        handleQtty={handleQtty}
      />
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    updateProductsCart,
    removeFromCart,
  };
};

const mapDispatchToProps = {
  addToFavorites,
  removeFromFavorites,
  addToCart,
  updateProductsCart,
  removeFromCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
