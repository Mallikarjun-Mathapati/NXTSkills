import React from "react";
import "../HomeSections/HomeSection.css";
import WhyNxtskill from "../HomeSections/WhyNxtskill";
import Banner from "../HomeSections/Banner";
import ContactForm from "../HomeSections/ContactForm";
import Progress from "../HomeSections/Progress";
import ServicesHome from "../HomeSections/ServicesHome";
import Windows from "../HomeSections/Windows";
import TextScroll from "../Components/TextScroll";
import ImageScroll from "../Components/ImageScroll";
import ImagesScroll from "../Images/OMS/BRANDS.png";
import NxtSkillsPower from "../HomeSections/NxtSkillsPower";
import OurClient from "../HomeSections/OurClient";
import HeroSection from "../Components/HeroSection.js/HeroSection";
import Testimonial from "../Components/Testimonials/Testimonial";
const Home = () => {
  return (
    <>
      <HeroSection />
      <TextScroll />
      <ImageScroll ImageScrollImage={ImagesScroll} />
      <ServicesHome />
      <WhyNxtskill />
      <NxtSkillsPower />
      <OurClient />
      <Progress />
      <Windows />
      <Banner />
      <Testimonial />
      <ContactForm />
    </>
  );
};

export default Home;
