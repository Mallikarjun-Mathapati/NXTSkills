import React, { useState } from "react";
import OurClientResponsive from "./Responsive/OurClientResponsive";

const OurClient = () => {
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);
  const [hide5, setHide5] = useState(false);
  return (
    <>
      <div className="our-client">
        <div className="container">
          <div className="our-client-heading">
            <h4>Our Client-Centric Approach!</h4>
          </div>
          <div className="our-client-main-flex">
            <div className="our-client-description">
              <h3>
                At NXTSkills, our clients are at the heart of everything we do
              </h3>
              <p>
                At NXTSkills, our clients are at the heart of everything we do.
                We understand that every business is unique, with its own set of
                challenges, goals, and aspirations. That's why we have developed
                a client-centric approach that ensures your satisfaction,
                success, and peace of mind throughout our partnership.
              </p>
              <div className="our-client-description-hidden-text-main">
                <div
                  className={`our-client-description-hidden-text-1 ${
                    hide ? "our-client-description-hidden-text-1" : ""
                  } ${hide1 ? "our-client-hidden-text-1" : ""} ${
                    hide2 ? "our-client-hidden-text-1" : ""
                  } ${hide3 ? "our-client-hidden-text-1" : ""} ${
                    hide4 ? "our-client-hidden-text-1" : ""
                  } ${hide5 ? "our-client-hidden-text-1" : ""}`}
                >
                  <p>
                    <span>Solution Oriented :</span> We are a team of
                    professionals who are passionate about the solution oriented
                    approach to the problem solving.
                  </p>
                </div>
                <div
                  className={`our-client-description-hidden-text-2 ${
                    hide1 ? "our-client-hidden-text-3" : ""
                  }`}
                >
                  <p>
                    <span>Compliance Champions:</span> With an unwavering
                    commitment to IT compliance, we ensure your organization
                    operates ethically and securely.
                  </p>
                </div>
                <div
                  className={`our-client-description-hidden-text-3 ${
                    hide2 ? "our-client-hidden-text-3" : ""
                  }`}
                >
                  <p>
                    <span>Security Guardians:</span> Cybersecurity is at the
                    core of our services. We fortify your digital fortress to
                    protect your assets, from the External threats.
                  </p>
                </div>
                <div
                  className={`our-client-description-hidden-text-4 ${
                    hide3 ? "our-client-hidden-text-3" : ""
                  }`}
                >
                  <p>
                    <span>Centralization Experts:</span> We specialize in
                    streamlining and centralizing IT infrastructures,
                    simplifying management, and optimizing efficiency.
                  </p>
                </div>
                <div
                  className={`our-client-description-hidden-text-5 ${
                    hide4 ? "our-client-hidden-text-3" : ""
                  }`}
                >
                  <p>
                    <span>Startups to SMBs :</span> Whether you're a fledgling
                    startup or a well-established SMB, we're here to level up
                    your IT Business, To produce efficient output.
                  </p>
                </div>
                <div
                  className={`our-client-description-hidden-text-3 ${
                    hide5 ? "our-client-hidden-text-3" : ""
                  }`}
                >
                  <p>
                    <span>Empowering Businesses :</span> We believe that IT
                    should empower businesses, not hinder them. Our solutions
                    are tailor-made to enhance your operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="our-client-grid">
              <div className="our-client-grid-main">
                <div className="our-client-grid-1 our-client-grid-same"></div>
                <div
                  className="our-client-grid-2 our-client-grid-same flex"
                  onMouseOver={() => setHide(true)}
                  onMouseLeave={() => setHide(false)}
                >
                  <p>Solution Oriented</p>
                </div>
                <div
                  className="our-client-grid-3 our-client-grid-same flex"
                  onMouseOver={() => setHide1(true)}
                  onMouseLeave={() => setHide1(false)}
                >
                  <p>Compliance Champions</p>
                </div>
                <div className="our-client-grid-4 our-client-grid-same"></div>
                <div
                  className="our-client-grid-5 our-client-grid-same flex"
                  onMouseOver={() => setHide2(true)}
                  onMouseLeave={() => setHide2(false)}
                >
                  <p>Security Guardians</p>
                </div>
                <div className="our-client-grid-6 our-client-grid-same flex">
                  <p>CLIENT</p>
                </div>
                <div
                  className="our-client-grid-7 our-client-grid-same flex"
                  onMouseOver={() => setHide3(true)}
                  onMouseLeave={() => setHide3(false)}
                >
                  <p>Centralization Experts</p>
                </div>
                <div className="our-client-grid-8 our-client-grid-same"></div>
                <div
                  className="our-client-grid-9 our-client-grid-same flex"
                  onMouseOver={() => setHide4(true)}
                  onMouseLeave={() => setHide4(false)}
                >
                  <p>Startups to SMBs</p>
                </div>
                <div
                  className="our-client-grid-10 our-client-grid-same flex"
                  onMouseOver={() => setHide5(true)}
                  onMouseLeave={() => setHide5(false)}
                >
                  <p>Empowering Businesses</p>
                </div>
                <div className="our-client-grid-11 our-client-grid-same "></div>
              </div>
            </div>
            <div className="our-client-responsive-main">
              <OurClientResponsive />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClient;
