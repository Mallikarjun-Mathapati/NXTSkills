import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Pro1 from "../Images/HomeSection/Progress/1.json";
import Pro2 from "../Images/HomeSection/Progress/2.json";
import Pro3 from "../Images/HomeSection/Progress/3.json";
import Pro4 from "../Images/HomeSection/Progress/4.json";
import Pro5 from "../Images/HomeSection/Progress/5.json";
import Pro6 from "../Images/HomeSection/Progress/6.json";
import Lottie from "lottie-react";

const MainProgress = (props) => {
  const [Count, setCount] = useState(false);
  const ProgressData = [
    {
      id: "1",
      numbers: "300",
      details: "We have successfully completed a total of 300+ projects",
      img: Pro1,
      className: "progress-grid-detail-1",
      span: "+",
    },
    {
      id: "2",
      numbers: "2",
      details: "We’ve gathered dozens of reviews from the clients ",
      img: Pro2,
      className: "progress-grid-detail-2",
      span: "K",
    },
    {
      id: "3",
      numbers: "10",
      details: "Years of experience",
      img: Pro3,
      className: "progress-grid-detail-3",
      span: "+",
    },
    {
      id: "4",
      numbers: "150",
      details: "Team members all over the india",
      img: Pro4,
      className: "progress-grid-detail-4",
      span: "+",
    },
    {
      id: "5",
      numbers: "525",
      details: "Corporate Partner",
      img: Pro5,
      className: "progress-grid-detail-5",
      span: "+",
    },
    {
      id: "6",
      numbers: "125",
      details: "Happy Clients",
      img: Pro6,
      className: "progress-grid-detail-6",
      span: "%",
    },
    {
      id: "7",
      numbers: "30",
      details:
        "We have successfully completed a total of 30+ projects in globally ",
      img: Pro1,
      className: "progress-grid-detail-7",
      span: "+",
    },
  ];

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        {/* half css in HomeSectiojn.css And Half CSS in Pages.css */}
        <div className={props.ProgressMain2}>
          {ProgressData.map((current, index) => {
            const { id, numbers, details, img, className, span } = current;
            return (
              <>
                <div className={`progress-same ${className}`} key={index}>
                  <h2 key={id}>
                    {Count && (
                      <CountUp start={1} end={numbers} duration={3}></CountUp>
                    )}
                    {span}
                  </h2>
                  <p>{details}</p>
                  <div className="svgfile">
                    <Lottie animationData={img} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="progress-grid-2"></div>
      </ScrollTrigger>
    </>
  );
};

export default MainProgress;
