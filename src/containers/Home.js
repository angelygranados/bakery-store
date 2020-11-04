import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";

const Home = ({ featured }) => {
  return (
    <section className="home">
      <section className="home__hero">
        <img src="https://cdn.pixabay.com/photo/2016/05/07/19/21/baguette-1378049_1280.jpg" />
      </section>
      <section className="home__intro wrapper">
        <div className="intro__images">
          <img
            className="intro__images--first"
            src="https://cdn.pixabay.com/photo/2016/11/29/08/24/bakery-1868396_960_720.jpg"
            alt="Amasado de pan"
          />
          <img
            className="intro__images--second"
            src="https://cdn.pixabay.com/photo/2016/11/29/09/00/abundance-1868573_960_720.jpg"
            alt="Vitrina de productos"
          />
        </div>
        <div className="intro__content">
          <h2>¡El mejor pan de la ciudad!</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </section>
      <section className="home__featured_products wrapper">
        <div className="featured_products--title">
          <h2>Destacados</h2>{" "}
          <Link className="btn" to="/productos">
            Ver más
          </Link>
        </div>

        <Slider items={featured} />
      </section>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
