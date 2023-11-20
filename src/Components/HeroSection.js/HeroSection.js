import React from "react";
import "./HeroSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import WhoDo from "./HeroSection/slide-2-side.png";
import HeroButton from "../Buttons/HeroButton";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={1}
          centeredSlides={true}
          //   autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //   }}
          mousewheel={{
            releaseOnEdges: true,
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
            Slide 3
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HeroSection;
