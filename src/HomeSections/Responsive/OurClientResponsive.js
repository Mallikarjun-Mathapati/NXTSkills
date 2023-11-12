import React from "react";

const OurClientResponsive = () => {
  const Client = [
    {
      id: "1",
      tittle: "Solution Oriented",
      text: "We are a team of professionals who are passionate about the solution oriented approach to the problem solving.",
    },
    {
      id: "2",
      tittle: "Startups to SMBs",
      text: "Whether you're a fledgling startup or a well-established SMB, we're here to level up your IT game.",
    },
    {
      id: "3",
      tittle: "Security Guardians",
      text: "Cybersecurity is at the core of our services. We fortify your digital fortress to protect your assets.",
    },
    {
      id: "4",
      tittle: "Compliance Champions",
      text: "With an unwavering commitment to IT compliance, we ensure your organization operates ethically and securely.",
    },
    {
      id: "5",
      tittle: "Centralization Experts",
      text: "We specialize in streamlining and centralizing IT infrastructures, simplifying management, and optimizing efficiency.",
    },
    {
      id: "6",
      tittle: "Empowering Businesses",
      text: "We believe that IT should empower businesses, not hinder them. Our solutions are tailor-made to enhance your operations.",
    },
  ];
  return (
    <>
      <div className="our-client-responsive">
        {Client.map((cont, idex) => {
          const { tittle, text, id } = cont;
          return (
            <div className="our-client-responsive-grid flex" key={idex}>
              {/* <div className="our-client-responsive-number-text">
              <h4>{title}</h4>
              </div> */}
              <h4 className="flex">
                <span>{id}</span> &nbsp;
                {tittle}
              </h4>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OurClientResponsive;
