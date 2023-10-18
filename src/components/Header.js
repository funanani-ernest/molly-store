import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaPhone,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <div className="navbar">
      <NavLink to="/home" className="navlink-custom">
        <h1 className="store-name"> Molly Online Store</h1>
      </NavLink>
      <div className="details">
        <div className="det-info">
          <NavLink to="/productsContainer" className="navlink-custom">
            <span>Products</span>
          </NavLink>
          <div className="dropdown">
            Contact Us
            <div className="dropdown-content">
              <div className="dropdown-span-a">
                <span><FontAwesomeIcon icon={faPhone}/> 081 883 6917</span>
                <a href="https://www.facebook.com/profile.php?id=61551567441427">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=0818836917&text=Hello%21">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>
          <NavLink to="aboutUs" className="navlink-custom">
            <span>About Us</span>
          </NavLink>
        </div>
        {/* <NavLink to="/cart" className="navlink-custom">
          <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink> */}
      </div>
    </div>
  );
};

export default Header;
