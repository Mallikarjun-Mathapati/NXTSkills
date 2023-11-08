import React from "react";
import WhyNxtskill from "../HomeSections/WhyNxtskill";
import Banner from "../HomeSections/Banner";
import ContactForm from "../HomeSections/ContactForm";
import Progress from "../HomeSections/Progress";
import ServicesHome from "../HomeSections/ServicesHome";

const Home = () => {
  return (
    <>
      <ServicesHome />
      <WhyNxtskill />
      <Progress />
      <Banner />
      <ContactForm />
    </>
  );
};

export default Home;
