import React from "react";
import "./Footer.styles.scss";
import logo from "../../images/navlogo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="location-info">
        <h1>Our Location</h1>
        <p>5418 State Route 89</p>
        <p>Romulus, NY 14541</p>
      </div>
      <div className="hours-info">
        <h1>Hours</h1>
        <p>Saturday 11am-5pm</p>
        <p>Sunday 11am-5pm</p>
      </div>
      <div className="social">
        <h1>Follow Us</h1>
        <div className="social-logo">
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
