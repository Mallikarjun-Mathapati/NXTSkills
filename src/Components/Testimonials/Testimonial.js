import React from "react";
import TestimonialsMain from "./TestimonialsMain";

const Testimonial = () => {
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
            <div className="testimonials-main-grid-2">
              <TestimonialsMain />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
