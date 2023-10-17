import React from 'react'
import './Header.css'
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="navbar">
      <NavLink to="/home"  className="navlink-custom">
        <h1 className="store-name"> Molly Online Store</h1>
       </NavLink>
        <div className="details">
          <div className="det-info">
            <NavLink to="/productsContainer"  className="navlink-custom">
              <span>Products</span>
            </NavLink>
            <span>Contact Us</span>
            <NavLink to="aboutUs"  className="navlink-custom">
              <span>About Us</span>
            </NavLink>
          </div>
          {/* <NavLink to="/cart" className="navlink-custom">
          <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink> */}
         
        </div>
      </div>
  )
}

export default Header