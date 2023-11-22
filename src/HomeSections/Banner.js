import React from "react";
import BannerIllu from "../Images/HomeSection/Banner/Banner-illu.png";
import HeroButton from "../Components/Buttons/HeroButton";

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
              <div className="banner-button">
                <HeroButton
                  GoTo="Contact Us"
                  Links="/Contact-Us"
                  buttonClassName="banner-button-sub"
                />
              </div>
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
