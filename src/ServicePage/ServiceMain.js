import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceData from "./ServicesData";
import "./Service.css";

const ServiceMain = () => {
  return (
    <>
      <div styleName="services">
        <div className="service-process">
          <div className="container">
            <div className="service-process-heading">
              <h2>OUR WORK PROCESS</h2>
              <p>
                We supply clients across the entire globe with improved network
                connections.
              </p>
            </div>
          </div>
          <div className="service-process-main">
            {ServiceData.map((current) => {
              const { ServiceName, className, description, Svg } = current;
              return (
                <>
                  <div
                    className={`service-process-grid ${className}`}
                    key={current.id}
                  >
                    <div className="service-process-grid-img">{Svg?.[0]}</div>
                    <div className="service-process-grid-detail">
                      <h3>{ServiceName}</h3>
                      <p className="service-process-grid-detail-p">
                        {description?.[2]}
                      </p>
                      <Link to={`/Services/${current.id}`}>Learn More</Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceMain;
