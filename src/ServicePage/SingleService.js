import React from "react";
import ServiceData from "./ServicesData";
import { useParams } from "react-router-dom";
import "./Service.css";
import ContactForm from "../HomeSections/ContactForm";

const SingleService = () => {
  const { serviceId } = useParams();
  const services = ServiceData.find((service) => service.id === serviceId);
  const { ServiceName, description, minidescription, Svg } = services;
  return (
    <>
      <div className="single-service">
        <div className="single-service-hero">
          <div className="single-service-hero-img">{Svg?.[0]}</div>
          <div className="single-service-hero-name">
            <h2>{ServiceName}</h2>
            <p>{minidescription}</p>
          </div>
        </div>
        <div className="container single-service-detail-heading-p">
          <div className="single-service-detail-heading">
            <h2>{ServiceName}</h2>
            <p>{description?.[0]}</p>
          </div>
          <div className="single-service-detail-flex">
            <div className="single-service-detail-1">
              <p className="single-service-detail-p-1">{description?.[1]}</p>
              <p className="single-service-detail-p-2">{description?.[2]}</p>
              <p className="single-service-detail-p-3">{description?.[3]}</p>
            </div>
            <div className="single-service-detail-svg">{Svg?.[1]}</div>
          </div>
          <div className="single-service-detail-flex single-service-detail-flex-new">
            <div className="single-service-detail-svg">{Svg?.[2]}</div>
            <div className="single-service-detail-1">
              <p className="single-service-detail-p-4">{description?.[4]}</p>
              <p className="single-service-detail-p-5">{description?.[5]}</p>
              <p className="single-service-detail-p-6">{description?.[6]}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="single-service-contact-form">
        <ContactForm />
      </div>
    </>
  );
};

export default SingleService;
