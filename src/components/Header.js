import React from 'react'
import './Header.css'
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="navbar">
      <NavLink to="/home">
        <h1 className="store-name"> Molly Online Store</h1>
       </NavLink>
        <div className="details">
          <div className="det-info">
            <NavLink to="/productsContainer">
              <span>Products</span>
            </NavLink>
            <span>Contact Us</span>
            <NavLink to="aboutUs">
              <span>About Us</span>
            </NavLink>
          </div>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </div>
  )
}

export default Header