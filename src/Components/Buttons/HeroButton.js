import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const HeroButton = (props) => {
  return (
    <div className="button-main">
      <Link to={props.Links}>
        <button
          className={`swiper-slide-hero-2-button ${props.buttonClassName}`}
        >
          {props.GoTo}
        </button>
      </Link>
    </div>
  );
};

export default HeroButton;
