import initialState from "../initialState.json";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: action.products };
    case "ADD_TO_CART":
      return { ...state, myCart: [...state.myCart, action.product] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        myCart: state.myCart.filter(
          (product) => product.productId !== action.productId
        ),
      };
    case "UPDATE_PRODUCTS_QTTY":
      return {
        ...state,
        myCart: state.myCart.map((product) =>
          product.productId === action.product.productId
            ? action.product
            : product
        ),
      };
    case "ADD_TO_FAVORITES":
      return { ...state, myFavorites: [...state.myFavorites, action.product] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (product) => product.id !== action.productId
        ),
      };
    default:
      return state;
  }
}
