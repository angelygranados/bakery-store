export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  products,
});

export function addToCart(product) {
  return { type: ADD_TO_CART, product };
}

export function addToFavorites(product) {
  return { type: ADD_TO_FAVORITES, product };
}

export function removeFromFavorites(productId) {
  return { type: REMOVE_FROM_FAVORITES, productId };
}
