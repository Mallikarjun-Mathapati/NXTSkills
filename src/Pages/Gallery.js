import React, { useState } from "react";
import SubPageHead from "../Components/SubPageHead";
import GalleryData from "../Data/Gallery";

const Gallery = () => {
  const [onegallery, setOnegallery] = useState("");
  const [openphoto, setOpenphoto] = useState(false);

  const getImg = (e) => {
    setOnegallery(e);
    setOpenphoto(true);
  };
  return (
    <>
      <div className="gallery">
        <div className="gallery-heading">
          <SubPageHead Header="GALLERY" />
        </div>

        <div className="gallery-main-heading">
          <h2>GALLERY</h2>
        </div>
        <div className="gallery-container">
          <div className="container flex">
            <div className="gallery-grid">
              {GalleryData.map((item, index) => {
                return (
                  <>
                    <div
                      className="gallery-grid-1"
                      key={index}
                      onClick={() => getImg(item.img)}
                    >
                      <img src={item.img} alt={item.id} />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={`popup-one-photo ${"flex"} ${
            openphoto ? "popup-one-photo-open" : ""
          }`}
          onClick={() => setOpenphoto(false)}
        >
          <div className="popup-one-photo-img">
            <img src={onegallery} alt={GalleryData.id} />
          </div>
        </div>
        <div
          className={`popup-one-photo-button-open ${
            openphoto ? "popup-one-photo-button" : ""
          }`}
        >
          <button onClick={() => setOpenphoto(false)}>
            <i className="fa-solid fa-xmark fa-xl"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
