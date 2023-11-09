import React from "react";

const ImageScroll = (props) => {
  return (
    <div>
      <div className="text-scroller-auto " style={{ margin: "1rem 0" }}>
        <div className="text-scroller-auto-1 ">
          <div
            className={`text-scroller-main-img ${props.ImageScrollImgClass} ${props.ImageScrollImgClass2}`}
          >
            <img
              src={props.ImageScrollImage}
              alt=""
              className="text-scroller-main-img-1"
            />
            <img
              src={props.ImageScrollImage}
              alt=""
              className="text-scroller-main-img-1"
            />
            <img
              src={props.ImageScrollImage}
              alt=""
              className="text-scroller-main-img-1"
            />
            <img
              src={props.ImageScrollImage}
              alt=""
              className="text-scroller-main-img-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageScroll;
