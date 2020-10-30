import React from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/images/logo-dark.png";

const Footer = () => {
  function navClean() {
    const items = document.getElementsByClassName("link");
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
    }
  }
  function toggleActiveNav(e) {
    if (
      e.target.id === "products" ||
      e.target.id === "about" ||
      e.target.id === "contact"
    ) {
      let navItem = document.getElementById(e.target.id);
      navClean();
      navItem.classList.add("active");
    } else navClean();
  }
  return (
    <footer className="footer">
      <Link to="/" className="icon" onClick={toggleActiveNav}>
        <figure>
          <img src={logoDark} alt="Eli's Bakery" />
        </figure>
      </Link>
      <div className="secondary_nav">
        <ul>
          <li>
            <Link
              to="/contact"
              className="link "
              id="contact"
              onClick={toggleActiveNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
