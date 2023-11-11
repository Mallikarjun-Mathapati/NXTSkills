import React from "react";
import { Link } from "react-router-dom";
import Email from "../Images/HomeSection/Contact-form/email.svg";
import ContactIcon from "../Images/HomeSection/Contact-form/Contact.svg";

const ContactForm = () => {
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
                action="https://formsubmit.co/malluma9045@gmail.com"
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
                  <div className="contact-from-last-name same-form">
                    <label htmlFor="Last-Name">Last Name</label>
                    <input type="text" placeholder="Gowda" name="Last-Name" />
                  </div>
                </div>
                <div className="contact-from-company-name same-form">
                  <label htmlFor="Company-Name">
                    Phone Number <span>*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0123456789"
                    name="Company-Name"
                  />
                </div>
                <div className="contact-from-email same-form">
                  <label htmlFor="Email">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="shivagowda@example.com"
                    name="Email"
                  />
                </div>
                <div className="contact-from-message same-form">
                  <label htmlFor="Message">Message</label>
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
                  <button value="Submit">Submit</button>
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
