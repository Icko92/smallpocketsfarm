import React from "react";
import "./Header.styles.scss";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigation">
        <div className="our-process">Our Process</div>
        <div className="our-story">Our Story</div>
        <div className="visit-us">Visit Us</div>
      </div>
    </div>
  );
}
