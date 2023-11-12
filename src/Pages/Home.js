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

const Home = () => {
  return (
    <>
      <TextScroll />
      <ImageScroll ImageScrollImage={ImagesScroll} />
      <ServicesHome />
      <WhyNxtskill />
      <NxtSkillsPower />
      <OurClient />
      <Progress />
      <Windows />
      <Banner />
      <ContactForm />
    </>
  );
};

export default Home;
