import React, { useState } from "react";
import "./Home.css";
import ProductsContainer from "./ProductsContainer";
import AboutUs from "./AboutUs";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Home = () => {
  return (
    <div className="home">
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
        <NavLink to="/productsContainer" className="navlink-customs">
        <p>SHOP NOW</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
