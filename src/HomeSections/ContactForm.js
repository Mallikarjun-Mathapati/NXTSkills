import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Email from "../Images/HomeSection/Contact-form/email.svg";
import ContactIcon from "../Images/HomeSection/Contact-form/Contact.svg";

const ContactForm = () => {
  const [submit, setSubmit] = useState("");
  const form = useRef();
  const SendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uqbph98",
        "template_m0eix8q",
        form.current,
        "JBSZ-rOTI1fT8wt9p"
      )
      .then(
        (result) => {
          setSubmit("Your form has been successfully submitted!");
          setInterval(() => {
            setSubmit("");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setSubmit("Please Try Again");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="contact-form">
        <div className="container">
          <div className="contact-from-grid">
            <div className="contact-from-grid-details">
              <div className="contact-from-grid-details-heading flex">
                <h2>Contact Our Team </h2>
                <p>
                  Thank you for your interest in Nxtskills. Please use this form
                  to contact us. We will get back to you as soon as we can.
                </p>
              </div>
              <div className="contact-from-grid-details-contact">
                <div className="contact-from-grid-details-contact-grid">
                  <div className="contact-from-grid-details-contact-1 same-grid-contact-form flex">
                    <img src={Email} alt="Email icon" />
                    <h5>E-mail</h5>
                    <Link to="mailto:info@nxtskills.com">
                      <p>info@nxtskills.com</p>
                    </Link>
                  </div>
                  <div className="contact-from-grid-details-contact-2 same-grid-contact-form flex">
                    <img src={ContactIcon} alt="Contact icon" />
                    <h5>Ph.No.</h5>
                    <Link to="tel:+919008353635">
                      <p>+91 9008353635</p>
                    </Link>
                  </div>
                </div>
                <div className="contact-from-grid-details-contact-grid-1">
                  <div className="contact-from-grid-details-contact-3 same-grid-contact-form flex">
                    <h5>Location : </h5>
                    <Link
                      to="https://maps.app.goo.gl/jwBRGYkN2StRG1qk7"
                      target="_blank"
                    >
                      <p>
                        197 New no 15, 4th Cross Road, 7th Block West, 7th
                        Block, Jayanagar, Bengaluru, Karnataka 560070
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-from-grid-from">
              <form
                ref={form}
                onSubmit={SendMail}
                className="contact-from-grid-from"
                method="POST"
              >
                <div className="contact-from-first-last-name">
                  <div className="contact-from-first-name same-form">
                    <label htmlFor="First-Name">
                      First Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Shiva"
                      name="First-Name"
                    />
                  </div>
                  {/* <div className="contact-from-last-name same-form">
                    <label htmlFor="Last-Name">Last Name</label>
                    <input type="text" placeholder="J" name="Last-Name" />
                  </div> */}
                  <div className="contact-from-company-name same-form">
                    <label htmlFor="Company-Name">
                      Phone Number <span>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0123456789"
                      name="Phone-Number"
                    />
                  </div>
                </div>
                {/* <div className="contact-from-company-name same-form">
                  <label htmlFor="Company-Name">
                    Phone Number <span>*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0123456789"
                    name="Phone-Number"
                  />
                </div> */}
                <div className="same-form contact-form-service-option">
                  <label htmlFor="service">Services</label>
                  <select name="services-one">
                    <option value="">Select</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Endpoint and Synch'd Security solutions">
                      Endpoint and Synch'd Security solutions
                    </option>
                    <option value="IT Managed Services">
                      IT Managed Services
                    </option>
                    <option value="IT Manpower">IT Manpower</option>
                    <option value="IT Physical Audit">IT Physical Audit</option>
                    <option value="IT Asset Management">
                      IT Asset Management
                    </option>
                  </select>
                </div>
                <div className="contact-from-email same-form">
                  <label htmlFor="Email">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="example@example.com"
                    name="Email"
                  />
                </div>
                <div className="contact-from-message same-form">
                  <label htmlFor="Message">Description</label>
                  <textarea
                    placeholder="Please enter your message"
                    name="Message"
                  ></textarea>
                </div>
                <div className="contact-form-button">
                  <p>
                    Fields marked with an asterisk (
                    <span style={{ color: "red" }}>*</span>) are required.{" "}
                  </p>
                  <div className="contact-form-result-button">
                    <button value="Submit">Submit</button>
                    <p>{submit}</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
