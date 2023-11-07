import React from "react";
import AboutUS from "../Images/Pages/About Us/Aboutusmain.gif";
import SubPageHead from "../Components/SubPageHead";
import MainProgress from "../Components/MainProgress";

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <SubPageHead
          Header="ABOUT US"
          SubHeader=" We’re a global team with a single mission: helping small businesses 
grow & compete with the big guys."
        />
        <div className="container">
          <div className="progress-bar-heading">
            <h2>We Have Been Around for a While</h2>
          </div>
          <MainProgress
            ProgressMain="about-progress"
            ProgressMain2="about-progress-grid"
          />
          <div className="about-us-main-heading">
            <h2>What We Say</h2>
            <h3>
              We empower organizations to thrive in the digital landscape.
            </h3>
          </div>
          <div className="about-us-flex flex">
            <div className="about-us-flex-detail">
              <p>
                As your trusted technology partner, we offer holistic IT managed
                services, proactive monitoring, troubleshooting, and strategic
                planning to optimize your systems and align with your business
                objectives. We design robust network and server infrastructure
                setups, ensuring reliability, high performance, and scalability
                for future growth.
              </p>
              <h4>
                IT helped us identify three key areas to focus: tools, teams,
                and training.
              </h4>
              <p>
                We are an energetic team of IT consultants, delivering
                comprehensive support and services across technology domains.
                With expertise in cybersecurity, unified endpoint management, IT
                managed services, network infrastructure, and conferencing
                solutions
              </p>
            </div>
            <div className="about-us-flex-img flex">
              <img src={AboutUS} alt="" />
            </div>
          </div>
          <div className="about-us-vision-mision">
            <div className="about-us-vision-mision-grid-1">
              <div className="about-us-vision-mision-grid-1-sub flex">
                <h3>OUR STORY</h3>
                <p>
                  We envision a world where every company, from startups to
                  SMBs, has access to cutting-edge IT solutions and top-tier
                  security measures. Our commitment lies in revolutionizing the
                  IT landscape, empowering organizations to thrive in an
                  increasingly digital world.
                </p>
              </div>
            </div>
            <div className="about-us-vision-mision-grid-2 flex">
              <h3>VISION</h3>
              <p>
                We envision a world where every company, from startups to SMBs,
                has access to cutting-edge IT solutions and top-tier security
                measures. Our commitment lies in revolutionizing the IT
                landscape, empowering organizations to thrive in an increasingly
                digital world.
              </p>
            </div>
            <div className="about-us-vision-mision-grid-1">
              <div className="about-us-vision-mision-grid-1-sub flex">
                <h3>MISSION</h3>
                <p>
                  Nxtskills is on a mission to set the gold standard for IT
                  excellence and security across industries. We're dedicated to
                  providing comprehensive support, helping companies centralize
                  their IT infrastructure, and ensuring they adhere to the
                  highest standards of IT compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
