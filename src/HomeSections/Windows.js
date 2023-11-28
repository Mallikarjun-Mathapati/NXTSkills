import React from "react";
import { Link } from "react-router-dom";
import Person from "../Images/Windows/person.png";
import Location from "../Images/Windows/svg/ion_location-sharp.svg";
import facebook from "../Images/Windows/svg/lucide_facebook.svg";
import Instagram from "../Images/Windows/svg/ri_instagram-fill.svg";
import Whatsapp from "../Images/Windows/svg/ri_whatsapp-fill.svg";
import X from "../Images/Windows/svg/bi_twitter.svg";
import Phone from "../Images/Windows/svg/ph_phone-fill.svg";
import Logo from "../Images/Navbar/Logo.svg";
const Windows = () => {
  return (
    <>
      <div className="windows flex">
        <div className="container">
          <div className="windows-main-flex flex">
            <div className="windows-grid">
              <Link to="/" className="window windows-grid-1 flex">
                <div className="windows-grid-1-hide"></div>
                <h4>PROJECTS</h4>
              </Link>
              <div className="window windows-grid-2"></div>
              <Link to="/" className="window windows-grid-3 flex">
                <div className="windows-grid-3-hide"></div>
                <h4>BLOG</h4>
              </Link>
              <div className="window windows-grid-4 flex">
                <div className="windows-grid-4-hide flex"></div>
                <img src={Person} alt="Random" />
              </div>
              <div className="window windows-grid-5"></div>
              <Link to="/Services" className="window windows-grid-6 flex">
                <div className="windows-grid-6-hide"></div>
                <div className="windows-grid-6-h4">
                  <h4>SERVICES</h4>
                </div>
              </Link>
              <div className="window windows-grid-7"></div>
              <Link
                to="/About-Us"
                target="_black"
                className="window windows-grid-8 flex"
              >
                <div className="windows-grid-8-front flex">
                  {/* <h4>ABOUT US</h4> */}
                </div>
                <div className="windows-grid-8-hide flex">
                  <h3>Nxt Skills</h3>
                  <hr />
                  <p>
                    As your trusted technology partner, we offer holistic IT
                    managed services, proactive monitoring, troubleshooting, and
                    strategic planning to optimize your systems and align with
                    your business objectives.
                  </p>
                </div>
              </Link>
              <div className="window windows-grid-9 flex">
                <div className="windows-grid-9-hide"></div>
                <img src={Logo} alt="NXTSkills Logo" />
              </div>
              <div className="window windows-grid-10"></div>
              <Link
                to="https://maps.app.goo.gl/jwBRGYkN2StRG1qk7"
                target="_blank"
                className="window windows-grid-11 flex"
              >
                <div className="windows-grid-11-hide"></div>
                <img src={Location} alt="Location-logo" />
              </Link>
              <div className="window windows-grid-12"></div>
              <Link to="/Contact-Us" className="window windows-grid-13 flex">
                <div className="windows-grid-13-hide"></div>
                <img src={Phone} alt="Phono-logo" />
              </Link>
              <div className="window windows-grid-14 flex">
                <Link
                  to="https://www.facebook.com/Nxtskillsitsolutions/"
                  className="windows-grid-14-1 flex"
                >
                  <div className="windows-grid-14-1-hide"></div>
                  <img src={facebook} alt="Facebook" />
                </Link>
                <Link to="/" className="windows-grid-14-2 flex">
                  <div className="windows-grid-14-2-hide"></div>
                  <img src={Whatsapp} alt="whatsapp" />
                </Link>
                <Link to="/" className="windows-grid-14-3 flex">
                  <div className="windows-grid-14-3-hide"></div>
                  <img src={Instagram} alt="" />
                </Link>
                <Link to="/" className="windows-grid-14-4 flex">
                  <div className="windows-grid-14-4-hide"></div>
                  <img src={X} alt="twitter" />
                </Link>
              </div>
              <div className="window windows-grid-15"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Windows;
