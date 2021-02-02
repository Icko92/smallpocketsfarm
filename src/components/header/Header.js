import React from "react";
import "./Header.styles.scss";
import navlogo from "../../images/navlogo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={navlogo} alt="navlogo" />
      </div>
      <div className="navigation">
        <div className="our-process">Our Process</div>
        <div className="our-story">Our Story</div>
        <div className="visit-us">Visit Us</div>
        <div className="about-us">About Us</div>
      </div>
    </div>
  );
}
