import React from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";

const ProductsContainer = ({ products }) => {
  return <CardList products={products} />;
};
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
