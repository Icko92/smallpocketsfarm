import React from "react";
import "./Footer.styles.scss";
import logo from "../../images/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="location-info"></div>
      <div className="hours-info"></div>
      <div className="social"></div>
    </div>
  );
}

export default Footer;
