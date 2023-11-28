import React from "react";
import SubPageHead from "../Components/SubPageHead";
import ContactForm from "../HomeSections/ContactForm";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us">
        <SubPageHead
          Header="CONTACT US"
          SubHeader="Thank you for your interest"
        />
        {/* <div className="container"> */}
        <div className="contact-us-form">
          <ContactForm />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ContactUs;
