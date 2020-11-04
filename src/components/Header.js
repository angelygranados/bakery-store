import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import cartIcon from "../assets/images/shopping-cart-64.png";
import heartIcon from "../assets/images/heart-64.png";

const Header = () => {
  function navClean() {
    const items = document.getElementsByClassName("link");
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
    }
  }
  function toggleActiveNav(e) {
    if (e.target.id === "products" || e.target.id === "about") {
      let navItem = document.getElementById(e.target.id);
      navClean();
      navItem.classList.add("active");
    } else navClean();
  }
  return (
    <header className="header">
      <Link to="/" className="icon" onClick={toggleActiveNav}>
        <figure>
          <img src={logo} alt="Eli's Bakery" />
        </figure>
      </Link>
      <div className="navigation">
        <nav id="menu">
          <ul>
            <li>
              <Link
                to="/productos"
                className="link "
                id="products"
                onClick={toggleActiveNav}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="link"
                id="about"
                onClick={toggleActiveNav}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navigation__actions">
          <Link to="/cart" className="icon" onClick={toggleActiveNav}>
            <img src={cartIcon} alt="Mi carrito" />
          </Link>
          <Link to="/favoritos" className="icon" onClick={toggleActiveNav}>
            <img src={heartIcon} alt="Mis favoritos" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
