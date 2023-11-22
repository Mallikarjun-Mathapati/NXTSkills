import React from "react";
import SubPageHead from "../Components/SubPageHead";
import ServiceMain from "../ServicePage/ServiceMain";

const Services = () => {
  return (
    <>
      <div className="services">
        <SubPageHead
          Header="SERVICES"
          SubHeader="We’re a global team with a single mission: help small businesses 
grow & compete with the big guys."
          HeaderClass="service-header"
        />
      </div>
      <div className="services-main-page">
        <ServiceMain />
      </div>
    </>
  );
};

export default Services;
