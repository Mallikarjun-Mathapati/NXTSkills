import React from "react";
import MainProgress from "../Components/MainProgress";

const Progress = () => {
  return (
    <>
      <div className="progress">
        <div className="container">
          <div className="progress-heading">
            <h2>We Have Been Around for a While</h2>
            <p>
              <span>Process:</span> veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </p>
          </div>
          <div className="progress-main-grid">
            <MainProgress ProgressMain2="progress-grid-1" />
            <div className="progress-grid-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
