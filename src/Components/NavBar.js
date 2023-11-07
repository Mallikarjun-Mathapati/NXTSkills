import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../Images/Navbar/Logo.svg";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-grid">
          <div className="navbar-grid-logo">
            <img src={Logo} alt="NxtSkills" />
          </div>
          <div className="navbar-grid-link">
            <div className="navbar-grid-link-s">
              <NavLink to="/"> Home</NavLink>
              <NavLink to="/About-us"> About Us</NavLink>
              <NavLink to="/Services"> Services</NavLink>
              <NavLink to="/Blog"> Blog</NavLink>
              <NavLink to="/Contact-us"> Contact Us</NavLink>
            </div>
          </div>
          {/* Mobile Responsive */}
          <div className="navbar-mobile-menu">
            <div className="nav-social-icon">
              <Link target="_blank" to="/">
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link target="_blank" to="/">
                <i className="fa-brands fa-square-instagram"></i>
              </Link>
              <Link target="_blank" to="/">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
              <Link target="_blank" to="/">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
            </div>
            <div
              className="navbar-mobile-social-link"
              onClick={() => setMenu(true)}
            >
              <i className="fa-solid fa-bars fa-lg"></i>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`mobile-responsive ${menu ? "mobile-responsive-open" : ""}`}
      >
        <div className="mobile-responsive-links">
          <div
            className="navbar-mobile-social-link-x"
            onClick={() => setMenu(false)}
          >
            <i className="fa-solid fa-xmark fa-xl"></i>
          </div>
          <NavLink to="/" onClick={() => setMenu(false)}>
            {" "}
            Home
          </NavLink>
          <NavLink to="/About-us" onClick={() => setMenu(false)}>
            {" "}
            About Us
          </NavLink>
          <NavLink to="/Services" onClick={() => setMenu(false)}>
            {" "}
            Services
          </NavLink>
          <NavLink to="/Blog" onClick={() => setMenu(false)}>
            {" "}
            Blog
          </NavLink>
          <NavLink to="/Contact-us" onClick={() => setMenu(false)}>
            {" "}
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
