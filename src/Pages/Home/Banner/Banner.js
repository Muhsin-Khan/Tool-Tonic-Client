import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from '../../../images/Banner/1.jpg'
import banner2 from '../../../images/Banner/2.jpg'
import banner3 from '../../../images/Banner/3.jpg'

import './Banner.css'

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="banner-text-style">
          <h2 >Welcome to Tool Tonic</h2>
          <p className="">You are most welcome in a world class tool menufacturer company!!! It's just few clicks to maintain your items. So start...</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="banner-text-style">
          <h2 className="">In Short About Tool Tonic</h2>
          <p className="">Tool Tonic is a tool menufacturer whiche basically stores electrical and electronics products and distributes them all over the country door to door for serving people live in city even in rural and urban areas.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption >
          <div className="banner-text-style">
          <h2 >Explore Tool Tonic</h2>
          <p className="">
            Explore the factory and start your journey with the Tool Tonic.
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;