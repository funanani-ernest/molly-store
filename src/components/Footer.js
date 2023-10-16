import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Added FontAwesomeIcon import
import {
  faTwitter,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
         <p>molly online store © 2023 Powered by duvha Technologies</p>
         <p>cell:0794288410</p>
      <div className="footer-content">
       
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
    </div>
  );
};

export default Footer;
