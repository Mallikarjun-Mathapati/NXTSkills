import React from "react";

const NxtPowerResponsive = () => {
  const Power = [
    {
      title: "Streamlined Operations",
      description:
        "Say goodbye to inefficiencies. We optimize your operations, allowing youto do more with less. This translates to reduced costs higher productivity, and improved profitability.",
    },
    {
      title: "Exponential Growth",
      description:
        "Our innovative IT Solutions Are Tailored To Supercharge Your Growth. With Our Expertise, You'll Expand Your Horizons, Reach New Markets, And Scale Your Business To Levels You've Only Dreamed Of..",
    },
    {
      title: "Streamlined Operations",
      description:
        "Say goodbye to inefficiencies. We optimize your operations, allowing youto do more with less. This translates to reduced costs higher productivity, and improved profitability.",
    },
    {
      title: "Exponential Growth",
      description:
        "Our innovative IT Solutions Are Tailored To Supercharge Your Growth. With Our Expertise, You'll Expand Your Horizons, Reach New Markets, And Scale Your Business To Levels You've Only Dreamed Of..",
    },
  ];
  return (
    <>
      <div className="nxt-power-responsive">
        {Power.map((cont, id) => {
          const { title, description } = cont;
          return (
            <div className="nxt-power-responsive-grid flex">
              <h4>{title}</h4>
              <hr />
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NxtPowerResponsive;
