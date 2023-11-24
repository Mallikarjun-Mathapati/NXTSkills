import React from "react";
import { Link } from "react-router-dom";
// Cyber security start
import Security from "../SVGs/CyberSecurity";
// import CSecurity2 from "../SVGs/CyberSecurity2";
// end
// end paint security start
import EndPoint1 from "../SVGs/EndPointSecu";
// end
// IT ManPower start
// import ITManpower from "../SVGs/ITManpower";
import ITManpower2 from "../SVGs/ITManPower2";
// end
// it manages services start
import ItMangedServices from "../SVGs/ItMangedServices";
// end
import Audit from "../SVGs/Audit";
import OfficeM from "../SVGs/OfficeManagement";

const ServicesHome = () => {
  return (
    <>
      <div className="services-home-section">
        <div className="container">
          <div className="services-home-section-heading">
            <h2>Services</h2>
          </div>
          <div className="services-home-section-main-grid">
            <div className="services-home-section-grid-1 services-home-section-same">
              <div className="services-home-section-svg">
                <Security />
              </div>
            </div>
            <div className="services-home-section-grid-2 services-home-section-same">
              <div className="services-home-section-same-sub">
                <Link to="/Services/Cyber-Security">
                  <h3>Cyber security</h3>
                  <p className="text-len">
                    The significance of cybersecurity is best understood by
                    examining the current landscape. As digital transformation
                    sweeps across industries, organisations rely on information
                    technology to streamline operations and enhance customer
                    experiences. However, this reliance exposes new attack
                    vectors for malicious actors, ranging from phishing and
                    malware to ransomware and data breaches, with potentially
                    catastrophic consequences.
                  </p>
                </Link>
              </div>
            </div>
            <div className="services-home-section-grid-3 services-home-section-same">
              <div className="services-home-section-svg">
                <OfficeM />
              </div>
            </div>
            <div className="services-home-section-grid-4 services-home-section-same">
              <div className="services-home-section-same-sub">
                <Link to="/Services/Endpoint-and-Synchronized-Security-solutions">
                  <h3>Endpoint and Synchronized Security solutions</h3>
                  <p>
                    Endpoint security shields individual devices within a
                    network against cyber threats, encompassing measures like
                    antivirus software, firewalls, and patch management.
                    However, traditional endpoint security has limitations: it
                    operates in isolation, struggles with alert overload, and
                    lacks context about network-wide threats.
                  </p>
                </Link>
              </div>
            </div>
            <div className="services-home-section-grid-5 services-home-section-same">
              <div className="services-home-section-svg">
                <EndPoint1 />
              </div>
            </div>
            <div className="services-home-section-grid-6 services-home-section-same">
              <div className="services-home-section-same-sub">
                <Link to="/Services/IT-Managed-Services">
                  <h3>IT Managed Services</h3>
                  <p>
                    In the rapidly evolving digital landscape, IT has
                    transcended its traditional role as a support function to
                    become a strategic driver of business success. Organisations
                    increasingly rely on complex IT infrastructures to fuel
                    their operations and gain a competitive edge, underscoring
                    the critical importance of maintaining these systems
                    seamlessly. This article delves into the pivotal role of IT
                    Managed Services in enhancing operational efficiency and
                    explores how NXTSkills, a trusted provider of these
                    essential services, empowers organisations to thrive in the
                    digital age.
                  </p>
                </Link>
              </div>
            </div>
            <div className="services-home-section-grid-7 services-home-section-same">
              <div className="services-home-section-svg">
                <ItMangedServices />
              </div>
            </div>
            <div className="services-home-section-grid-8 services-home-section-same">
              <div className="services-home-section-same-sub">
                <Link to="/Services/IT-Manpower">
                  <h3>IT Manpower</h3>
                  <p>
                    " As the digital ecosystem continues to advance, the
                    importance of skilled IT professionals cannot be overstated.
                    These experts form the backbone of an organisation's IT
                    infrastructure, ensuring that systems run smoothly, security
                    is robust, and technology aligns with business goals.
                  </p>
                </Link>
              </div>
            </div>
            <div className="services-home-section-grid-9 services-home-section-same">
              <div className="services-home-section-svg">
                <ITManpower2 />
              </div>
            </div>
            <div className="services-home-section-grid-10 services-home-section-same">
              <div className="services-home-section-same-sub">
                <Link to="/Services/IT-Physical-Audit">
                  <h3>IT Physical Audit</h3>
                  <p>
                    Amidst the ever-evolving digital landscape, the importance
                    of conducting IT physical audits cannot be overstated. These
                    audits are essential for organizations aiming to optimize
                    their infrastructure, safeguard assets, and ensure
                    regulatory compliance. This article delves into the critical
                    role of IT physical audits and how NXTSkills, a trusted
                    provider of auditing services, empowers businesses to thrive
                    in the digital age.
                  </p>
                </Link>
              </div>
            </div>
            <div className="services-home-section-grid-11 services-home-section-same">
              <div className="services-home-section-svg">
                <Audit />
              </div>
            </div>
            <div className="services-home-section-grid-12 services-home-section-same">
              <div className="services-home-section-same-sub">
                <Link to="/Services/IT-Asset-Management">
                  <h3> IT Asset Management</h3>
                  <p>
                    The digital ecosystem depends on various assets, from
                    hardware components to software licences, data storage, and
                    networking equipment. Efficiently managing and controlling
                    these assets ensures cost-effectiveness, regulatory
                    compliance, and enhanced productivity.
                  </p>
                </Link>
              </div>
            </div>
            {/* <div className="services-home-section-grid-13 services-home-section-same">
              <div className="services-home-section-svg">
                <OfficeM />
              </div>
            </div>
            <div className="services-home-section-grid-14 services-home-section-same">
              <div className="services-home-section-same-sub">
                <Link to="/">
                  <h3>IT Manpower Consultant</h3>
                  <p>
                    Analyst, Security Specialist and more. Since the recruitment
                    requirements vary with every company, we Have created a
                    comprehensive workforce solution to meet the Rising demand.
                    Simplify your operations with our{" "}
                  </p>
                </Link>
              </div>
            </div>
            <div className="services-home-section-grid-15 services-home-section-same">
              <div className="services-home-section-svg">
                <Audit />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHome;
