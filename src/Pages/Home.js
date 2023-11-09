import React from "react";
import WhyNxtskill from "../HomeSections/WhyNxtskill";
import Banner from "../HomeSections/Banner";
import ContactForm from "../HomeSections/ContactForm";
import Progress from "../HomeSections/Progress";
import ServicesHome from "../HomeSections/ServicesHome";
import Windows from "../HomeSections/Windows";
import TextScroll from "../Components/TextScroll";
import ImageScroll from "../Components/ImageScroll";
import ImagesScroll from "../Images/OMS/BRANDS.png";

const Home = () => {
  return (
    <>
      <TextScroll />
      <ImageScroll ImageScrollImage={ImagesScroll} />
      <ServicesHome />
      <WhyNxtskill />
      <Progress />
      <Windows />
      <Banner />
      <ContactForm />
    </>
  );
};

export default Home;
