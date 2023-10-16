import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

import IMAGE1 from "../assests/IMAGE1.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="navbar">
        <h1 className="store-name"> Molly Online Store</h1>
        <div className="details">
          <div className="det-info">
            <span>Contact Us</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </div>

      <div className="home-content">
        <span>
          Welcome to Molly's Online Store, where elegance meets affordability.
          <br />
          We take pride in offering a curated selection of exquisite jewelry
          that captures <br />
          the essence of timeless beauty. Our passion for pearls and bracelets
          is evident in <br />
          every piece we present to you.
        </span>
        <p>
          <a>SHOP NOW</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
