import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
];

const Slider = ({ items }) => {
  return (
    <Carousel className="slider" breakPoints={breakPoints}>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.image_url} alt={item.title} />
          <span>{item.title}</span>
          <br />
          <span>{item.price}</span>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
