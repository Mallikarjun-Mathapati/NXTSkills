import React from "react";
import WhyNxtskill from "../HomeSections/WhyNxtskill";
import Banner from "../HomeSections/Banner";
import ContactForm from "../HomeSections/ContactForm";
import Progress from "../HomeSections/Progress";
import ServicesHome from "../HomeSections/ServicesHome";
import Windows from "../HomeSections/Windows";

const Home = () => {
  return (
    <>
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
