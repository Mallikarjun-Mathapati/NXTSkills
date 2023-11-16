import React, { useState, useEffect } from "react";

const Testimonial = () => {
  const testimonialsData = [
    {
      id: "1",
      name: "   Rajesh Patel",
      designation: "Software Engineer",
      company: "ABC Company",
      Image: require("../Images/Testimonials/Rajesh.png"),
      location: "",
      quote:
        "NXTSkills transformed my business with a user-friendly app. Increased sales and customer satisfaction. Truly game-changing.",
    },
    {
      id: "2",
      name: "Lorem ipsum",
      designation: "Software Engineer",
      company: "ABC Company",
      Image: require("../Images/Testimonials/Rajesh.png"),
      location: "",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis esse nemo, temporibus aliquam illum libero! Eveniet.",
    },
    {
      id: "3",
      name: "John Doe",
      designation: "Software Engineer",
      company: "ABC Company",
      Image: require("../Images/Testimonials/Rajesh.png"),
      location: "",
      quote:
        "I love working with the team at 10up. Their passion for what they do and their ability",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePreview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Autoplay functionality
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Change the interval as needed (in milliseconds)

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="testimonial">
        <div className="container">
          <div className="testimonial-heading">
            <h2>What Our Client Say</h2>
          </div>
          <div className="testimonial-main-grid">
            <div className="testimonial-grid-1">
              <p>
                We supply clients across the entire globe with improved network
                connections.
              </p>
            </div>
            {/* <div className="testimonial-grid-2"> */}
            {/* <div className="testimonial-grid-2-map">
                {testimonialsData.map((curr, idx) => {
                  const { name, Image, location, quote } = curr;
                  return (
                    <>
                      <p>{quote}</p>
                    </>
                  );
                })}
              </div> */}
            {/* start  */}
            <div className="testimonials-container">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial1 ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  <p>{testimonial.quote}</p>
                  <p>{testimonial.name}</p>
                </div>
              ))}
              <div className="buttons-container">
                <button className="prev-button" onClick={handlePreview}>
                  Preview
                </button>
                <button className="next-button" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
            {/* end  */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
