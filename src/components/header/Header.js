import React, { useState } from "react";
import "./Header.styles.scss";
import navlogo from "../../images/navlogo.png";
import { Link } from "react-scroll";

export default function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={navlogo} alt="navlogo" />
      </div>
      <div className="navigation-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className="navigation" style={clicked ? { margin: "0vw" } : null}>
        <Link
          onClick={handleClick}
          to="our-process"
          offset={-200}
          spy={true}
          smooth={true}
          duration={1000}
        >
          Our Process
        </Link>
        <Link
          onClick={handleClick}
          to="our-story"
          offset={-170}
          spy={true}
          smooth={true}
          duration={1000}
        >
          Our Story
        </Link>
        <Link
          onClick={handleClick}
          to="visit-us"
          offset={-180}
          spy={true}
          smooth={true}
          duration={1000}
        >
          Visit Us
        </Link>
        <Link
          onClick={handleClick}
          to="about-us"
          offset={0}
          spy={true}
          smooth={true}
          duration={1000}
        >
          About Us
        </Link>
      </div>
    </div>
  );
}
