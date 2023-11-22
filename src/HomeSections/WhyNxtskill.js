import React from "react";
import "./HomeSection.css";

const WhyNxtskill = () => {
  const NxtData = [
    {
      id: "1",
      image: require("../Images/HomeSection/WhyNxt/Expart.png"),
      title: "Experienced Team",
      description:
        "Our skilled professionals bring years of industry experience and expertise to every project.",
    },
    {
      id: "2",
      image: require("../Images/HomeSection/WhyNxt/CentricA.png"),
      title: "Client-Centric Approach",
      description:
        "We prioritize your unique needs and goals, ensuring a personalized approach to every project.",
    },
    {
      id: "3",
      image: require("../Images/HomeSection/WhyNxt/CuttingEDG.png"),
      title: "Cutting-Edge Technology",
      description:
        " We stay at the forefront of technology trends to provide you with innovative solutions.",
    },
    {
      id: "4",
      image: require("../Images/HomeSection/WhyNxt/Support.png"),
      title: "Reliable Support",
      description:
        "Our dedicated support team is available to assist you whenever you need it, ensuring your systems run smoothly.",
    },
  ];
  return (
    <>
      <div className="why-nxt">
        <div className="why-nxt-heading flex">
          <h2>WHY NXTSKILL?</h2>
          <p>Your Success is Our Priority</p>
        </div>
        <div className="container">
          <div className="why-nxt-grid">
            {NxtData.map((crt, index) => {
              const { title, description, image, id } = crt;
              return (
                <>
                  <div className="why-nxt-grid-1 flex" key={index}>
                    <img src={image} alt="icon" key={id} />
                    <h3>{title}</h3>
                    <p>{description}</p>
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

export default WhyNxtskill;
