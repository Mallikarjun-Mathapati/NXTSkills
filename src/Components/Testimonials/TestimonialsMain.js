import React, { useState } from "react";
import "./Testimonials.css";
import ArrowRight from "./Img/Arrow right.svg";
import ArrowLeft from "./Img/Arrow left.svg";

const TestimomialsMain = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "James",
      company: "Hella Infra",
      img: require("../Testimonials/Img/testimonials img.png"),
      comment:
        "Exceptional service during COVID times! NxtSkills delivered promptly, defying challenges others faced. Ensured on-time delivery as requested, maintaining impeccable quality. Impressed by their efficiency and reliability.        ",
    },
    {
      id: 2,
      name: "Harshith",
      company: "Swiggy",
      img: require("../Testimonials/Img/testimonials img.png"),
      comment:
        "Grateful to the NxtSkills team for flawlessly managing Swiggy's pan-Karnataka passive networking for the past few years. The services and timing have been impeccable. Their swift execution and focus on service without disrupting the process have been instrumental in maintaining a seamless flow. Thank you for your efficient and reliable support.        ",
    },
    {
      id: 3,
      name: "Jay",
      company: "Tartan sense",
      img: require("../Testimonials/Img/testimonials img.png"),
      comment:
        "Kudos to NxtSkills for providing exceptional services including CCTV, Biometric, firewall, access point, and passive work for Tartan Sense. The video conference setups were impeccable. Their understanding of client needs, and the friendly workers made the entire experience unparalleled. Remarkable work",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };
  return (
    <>
      <div className="testimonials-container">
        <div className="testimonials-list">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-item ${
                index === currentIndex ? "active1" : ""
              } ${
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === testimonialsData.length - 1)
                  ? "prev"
                  : index === currentIndex + 1 ||
                    (currentIndex === testimonialsData.length - 1 &&
                      index === 0)
                  ? "next"
                  : ""
              }`}
            >
              <p className="testimonial-comment">"{testimonial.comment}"</p>
              <div className="testimonial-comment-name-img">
                <img src={testimonial.img} alt={testimonial.name} />
                <div className="testimonial-comment-name">
                  <p className="testimonial-comment-name-1">
                    {" "}
                    {testimonial.name}
                  </p>
                  <p className="testimonial-comment-name-2">
                    ( {testimonial.company})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-navigation-buttons">
          <button onClick={handlePrev}>
            <img src={ArrowLeft} alt="Arrow-left" />
          </button>
          <button onClick={handleNext}>
            <img src={ArrowRight} alt="Arrow-left" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TestimomialsMain;
