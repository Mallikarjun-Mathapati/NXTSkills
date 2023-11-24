import React from "react";
import "./HeroSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import WhoDo from "./HeroSection/slide-2-side.png";
import HeroButton from "../Buttons/HeroButton";
import slid3side from "../HeroSection.js/HeroSection/slide-3-side.png";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={1}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          mousewheel={{
            releaseOnEdges: true,
            forceToAxis: true,
            sensitivity: 1,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide-hero-1 swiper-slide-hero-same">
            <div className="container">
              <div className="swiper-slide-hero-1-sub flex">
                <h5>Nxt skills</h5>
                <h2>Empowering Businesses with Cutting-Edge IT Solutions</h2>
                <p>
                  Your trusted partner in providing end-to-end IT solutions that
                  empower your business to thrive in the digital age. With a
                  commitment to innovation, a dedication to client success, and
                  a track record inspired by industry giants
                </p>
                <div className="button-hero">
                  <HeroButton
                    Links="/About-us"
                    GoTo="Learn More"
                    buttonClassName="swiper-slide-hero-1-sub-button"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-hero-2 swiper-slide-hero-same">
            <div className="container">
              {/* <div className="swiper-flex-main"> */}
              <div className="swiper-slide-hero-2-sub flex">
                <h5>WHO DO WE HELP!</h5>
                <h2>Empowering Your IT Future with Innovative Solutions.</h2>
                <p>
                  Unlock the potential of cutting-edge technology with NXT
                  Skills. We deliver innovative IT solutions that drive your
                  business forward.
                </p>
                <HeroButton Links="/Contact-us" GoTo="Contact Us" />
              </div>
              <div className="swiper-slide-hero-fixed">
                <img src={WhoDo} alt="Who-Do-You-Help" />
              </div>
              {/* </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-hero-3 swiper-slide-hero-same">
            <div className="container">
              <div className="swiper-slide-hero-3-flex">
                <div className="swiper-slide-hero-3-flex-detail">
                  <h5>Projects</h5>
                  <h4>
                    Unlocking Efficiency through Streamlined Automation
                    Solutions
                  </h4>
                  <div className="swiper-slide-hero-3-flex-project-detail">
                    <div className="swiper-slide-hero-3-flex-project-detail-1">
                      <h5>Werehouse Projects</h5>
                      <p>
                        Planning and implementation of wired/non wired
                        Infrastructure setups, complete network , access
                        controller and surveillance management.
                      </p>
                    </div>
                    <div className="swiper-slide-hero-3-flex-project-detail-1 swiper-slide-hero-3-flex-project-detail-1-hide">
                      <h5>Call Center Project</h5>
                      <p>
                        Analyze and implement relevant Infrastructure solutions
                        like cloud telephony, on premise voice solutions,
                        PRI/SIP, CRM integration, Internet etc....
                      </p>
                    </div>
                    <div className="swiper-slide-hero-3-button">
                      <HeroButton
                        Links="/"
                        GoTo="Learn More"
                        buttonClassName="swiper-slide-hero-3-sub-button"
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide-hero-3-flex-img">
                  <img src={slid3side} alt="NXTskills-projects" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Responsive hero  */}
      <div className="responsive-hero-section">
        <div className="swiper-slide-hero-1 flex">
          <div className="container">
            <div className="swiper-slide-hero-1-sub flex">
              <h5>Nxt skills</h5>
              <h2>Empowering Businesses with Cutting-Edge IT Solutions</h2>
              <p>
                Your trusted partner in providing end-to-end IT solutions that
                empower your business to thrive in the digital age. With a
                commitment to innovation, a dedication to client success, and a
                track record inspired by industry giants
              </p>
              <div className="button-hero">
                <HeroButton
                  Links="/About-us"
                  GoTo="Learn More"
                  buttonClassName="swiper-slide-hero-1-sub-button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
