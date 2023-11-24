import React from "react";
import MainProgress from "../Components/MainProgress";
import Process from "../Images/HomeSection/Progress/process.svg";

const Progress = () => {
  return (
    <>
      <div className="progress">
        <div className="container">
          <div className="progress-heading">
            <h2>We Have Been Around for a While</h2>
            <p>
              {/* <span>Process:</span>  */}
              Elevate your organization with NXT Skills IT solutions, a
              transformative approach to bolstering your team's capabilities.
              Our cutting-edge technology empowers seamless integration,
              fostering efficiency, innovation, and sustained growth in today's
              dynamic digital landscape.
            </p>
          </div>
          <div className="progress-main-grid">
            <MainProgress ProgressMain2="progress-grid-1" />
            <div className="progress-grid-2">
              <div className="progress-process-heading">
                <h3>OUR WORK PROCESS</h3>
              </div>
              <img src={Process} alt="NXTSkills Process" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
