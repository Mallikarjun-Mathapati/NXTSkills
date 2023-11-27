import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../Images/Navbar/Logo.svg";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState(false);
  const NavActive = () => {
    const Scroll = window.scrollY;
    if (Scroll > 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", NavActive);
  }, [setNav]);

  return (
    <>
      <nav className={`navbar ${nav ? "navbar-active" : ""}`}>
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
              <NavLink to="/Gallery"> Gallery</NavLink>
              <NavLink to="/Contact-us"> Contact Us</NavLink>
            </div>
          </div>
          {/* Mobile Responsive */}
          <div className="navbar-mobile-menu">
            <div
              className={`nav-social-icon ${nav ? "nav-social-icon-hide" : ""}`}
            >
              <Link
                target="_blank"
                to="https://www.facebook.com/Nxtskillsitsolutions/"
              >
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
              className={`navbar-mobile-social-link ${
                menu ? "navbar-mobile-social-link-hide" : ""
              }`}
              onClick={() => setMenu(true)}
            >
              <i className="fa-solid fa-bars fa-lg"></i>
            </div>
            {/* start  */}
            <div
              className={`navbar-mobile-social-link-x ${
                menu ? "navbar-mobile-social-link-x-hide" : ""
              }`}
              onClick={() => setMenu(false)}
            >
              <i className="fa-solid fa-xmark fa-xl"></i>
            </div>
            {/* end  */}
          </div>
        </div>
      </nav>
      <div
        className={`mobile-responsive ${menu ? "mobile-responsive-open" : ""}`}
      >
        <div className="mobile-responsive-links">
          {/* <div
            className="navbar-mobile-social-link-x"
            onClick={() => setMenu(false)}
          >
            <i className="fa-solid fa-xmark fa-xl"></i>
          </div> */}
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
          <NavLink to="/Gallery" onClick={() => setMenu(false)}>
            {" "}
            Gallery
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
