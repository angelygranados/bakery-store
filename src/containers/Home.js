import React from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";

const Home = ({ featured }) => {
  return (
    <section className="home">
      <section className="home__hero">
        <img src="https://cdn.pixabay.com/photo/2016/05/07/19/21/baguette-1378049_1280.jpg" />
      </section>
      <section className="home__intro"></section>
      <section className="home__featured_products">
        <h2>Destacados</h2>
        <CardList products={featured} />
      </section>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
