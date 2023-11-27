import React from "react";
import Logo from "../Images/Navbar/Logo.svg";
import Facebook from "../Images/Navbar/Social/Face.svg";
import Insta from "../Images/Navbar/Social/Insta.svg";
import Twitter from "../Images/Navbar/Social/Twitter.svg";
import Google from "../Images/Navbar/Social/google.svg";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  const Social = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/Nxtskillsitsolutions/",
      icon: Facebook,
      className: "facebook",
    },
    {
      name: "Instagram",
      link: "https://www.facebook.com/nxtskills",
      icon: Insta,
      className: "instagram",
    },
    {
      name: "Twitter",
      link: "https://www.facebook.com/nxtskills",
      icon: Twitter,
      className: "twitter",
    },
    {
      name: "Google",
      link: "mailto:info@nxtskills.com",
      icon: Google,
      className: "google",
    },
  ];
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-main-grid">
            <div className="footer-main-grid-1">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
              <p>
                Nxtskills is on a mission to set the gold standard for IT
                excellence and security across industries. We're dedicated to
                providing comprehensive support, helping companies centralize
                their IT infrastructure, and ensuring they adhere to the highest
                standards of IT compliance.
              </p>
              <div className="footer-social-icon">
                {Social.map((corr, id) => {
                  const { link, icon, className } = corr;
                  return (
                    <>
                      <Link
                        target="_blank"
                        to={link}
                        className={className}
                        key={id}
                      >
                        <button className="Btn">
                          <span className="svgContainer">
                            <img src={icon} alt="" />
                          </span>
                          <span className="BG"></span>
                        </button>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="footer-main-grid-2">
              <div className="footer-main-grid-quick-links flex">
                <h4>QUICK LINKS</h4>
                <NavLink to="/"> Home</NavLink>
                <NavLink to="/About-us"> About Us</NavLink>
                <NavLink to="/Services"> Services</NavLink>
                <NavLink to="/Blog"> Blog</NavLink>
                <NavLink to="/Contact-us"> Contact Us</NavLink>
              </div>
            </div>
            <div className="footer-main-grid-3">
              <div className="footer-main-grid-other-links footer-main-grid-quick-links flex">
                <h4>OTHER LINKS</h4>
                <Link to="/"> Social Work</Link>
                <Link to="/"> Privacy Policy</Link>
                <Link to="/"> Teams And Condition </Link>
                <Link to="/"> Case Studies</Link>
                <Link to="/"> Project’s</Link>
              </div>
            </div>
            <div className="footer-main-grid-4">
              <div className="footer-main-grid-address">
                <h4>ADDRESS</h4>
                <p>
                  <span>NXT SKILLS IT SOLUTIONS</span> <br />{" "}
                  <Link
                    target="_blank"
                    to="https://maps.app.goo.gl/jwBRGYkN2StRG1qk7"
                  >
                    197 New no 15, 4th Cross Road, 7th Block West, 7th Block,
                    Jayanagar, Bengaluru, Karnataka 560070
                  </Link>
                </p>
                <div className="footer-main-grid-address-email">
                  <p>
                    Email:{" "}
                    <Link to="mailto:info@nxtskills.com">
                      info@nxtskills.com
                    </Link>
                  </p>
                  <p>
                    Ph.No: <Link to="tel:08095071800">080 95071800</Link>,
                    <Link to="tel:+919008353635">+91 9008353635</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-link">
              <p>Copyright © 2019</p>
              <p>
                Design And Developed by{" "}
                <Link target="_blank" to="https://proshikhar.com/">
                  {" "}
                  👨‍💻PROSHIKHAR.COM
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
