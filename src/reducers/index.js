import initialState from "../initialState.json";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD_PRODUCTS":
      return { ...state, ...payload };

    default:
      return state;
  }
};
