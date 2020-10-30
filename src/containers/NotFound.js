import React from "react";
import cupcakeIcon from "../assets/images/cupcake_icon_80.png";
const NotFound = () => {
  return (
    <section className="not_found">
      <img src={cupcakeIcon} alt="cupcake icon" />
      <h1>
        Opps! <span>Page Not Found</span>
      </h1>
    </section>
  );
};

export default NotFound;
