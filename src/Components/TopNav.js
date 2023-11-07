import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <nav className="top-nav">
        <div className="top-nav-flex ">
          <div className="top-nav-flex-1">
            <div className="nav-social-icon">
              <Link>
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-square-instagram"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
            </div>
          </div>
          <div className="top-nav-flex-2">
            <div className="nav-contact-button flex">
              <Link to="tel:+919008353635">
                <i className="fa-solid fa-phone"></i> &nbsp; +91 9008353635
              </Link>
              <Link to="/Contact-Us">
                <button>Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
