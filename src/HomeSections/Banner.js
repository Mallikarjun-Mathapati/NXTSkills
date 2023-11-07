import React from "react";
import { Link } from "react-router-dom";
import BannerIllu from "../Images/HomeSection/Banner/Banner-illu.png";

const Banner = () => {
  return (
    <>
      <div className="banner flex">
        <div className="container">
          <div className="banner-grid">
            <div className="banner-grid-content">
              <h4>NXTSkills One-Stop IT Solutions Providers.</h4>
              <p>
                IT is not just a department, it's the backbone of organizations
                success. Leveraging our experience and knowledge, we offer a
                wide array of services tailored to meet your unique IT needs.
              </p>
              <Link>
                <button>Contact Us</button>
              </Link>
            </div>
            <div className="banner-grid-svg flex">
              <img src={BannerIllu} alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
