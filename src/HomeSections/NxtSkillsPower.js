import React, { useState } from "react";
import Line from "../Images/NXT Power/Background line.svg";
import NxtPowerResponsive from "./Responsive/NxtPowerResponsive";
import TextScroll from "../Components/TextScroll";

const NxtSkillsPower = () => {
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  return (
    <>
      <div className="nxt-skills-power">
        <div className="nxt-power-background-line">
          <img src={Line} alt="Background Line" />
        </div>
        <div className="nxt-skills-power-heading">
          <h2>
            How We Transform Organizations by Unleashing the Power of NXTSkills.
          </h2>
        </div>

        <div className="container">
          <div className="nxt-skills-power-main-grid flex">
            <div className="nxt-skills-power-ball-0 same-next-power-ball"></div>
            <div className="nxt-skills-power-ball-2 same-next-power-ball"></div>
            <div className="nxt-skills-power-ball-3 same-next-power-ball"></div>
            <div className="nxt-skills-power-ball-4 same-next-power-ball"></div>
            <div className="nxt-skills-power-gird-1 ">
              <div
                className={`nxt-skills-power-ball ${
                  hide ? "power-sub-gird-2-ball" : ""
                } ${hide1 ? "power-sub-gird-8-ball" : ""} ${
                  hide1 ? "power-sub-gird-8-ball" : ""
                } ${hide2 ? "power-sub-gird-9-ball" : ""}${
                  hide3 ? "power-sub-gird-12-ball" : ""
                }`}
              ></div>
              <div className="nxt-skills-power-ball"></div>
              <div className="nxt-skills-power-sub-gird">
                <div className="power-same-grid power-sub-gird-1"></div>
                <div
                  className="power-same-grid power-sub-gird-2 flex"
                  onMouseOver={() => setHide(true)}
                  onMouseLeave={() => setHide(false)}
                >
                  <p>Competitive Edge</p>
                </div>
                <div className="power-same-grid power-sub-gird-3"></div>
                <div className="power-same-grid power-sub-gird-4"></div>
                <div className="power-same-grid power-sub-gird-5"></div>
                <div className="power-same-grid power-sub-gird-6"></div>
                <div className="power-same-grid power-sub-gird-7"></div>
                <div
                  className="power-same-grid power-sub-gird-8 flex"
                  onMouseOver={() => setHide1(true)}
                  onMouseLeave={() => setHide1(false)}
                >
                  <p>Exponential Growth</p>
                </div>
                <div
                  className="power-same-grid power-sub-gird-9 flex"
                  onMouseOver={() => setHide2(true)}
                  onMouseLeave={() => setHide2(false)}
                >
                  <p>Streamlined Operations</p>
                </div>
                <div className="power-same-grid power-sub-gird-10"></div>
                <div className="power-same-grid power-sub-gird-11"></div>
                <div
                  className="power-same-grid power-sub-gird-12 flex"
                  onMouseOver={() => setHide3(true)}
                  onMouseLeave={() => setHide3(false)}
                >
                  <p>Streamlined Operations</p>
                </div>
                <div className="power-same-grid power-sub-gird-13"></div>
                <div className="power-same-grid power-sub-gird-14"></div>
                <div className="power-same-grid power-sub-gird-15"></div>
                <div className="power-same-grid power-sub-gird-16"></div>
                <div className="power-same-grid power-sub-gird-17"></div>
                <div className="power-same-grid power-sub-gird-18"></div>
              </div>
            </div>
            <div className="nxt-skills-power-gird-2">
              <div className="nxt-skills-power-gird-2-detail">
                <h4>What We Do ?</h4>
                <h3>our impact on organizations is not just profound</h3>
                <p>
                  it's a game-changer. We don't merely provide services; we
                  revolutionize the way businesses operate, driving them toward
                  unparalleled success. Here's how our partnership will empower
                  and elevate your organization.
                </p>
                <div className="nxt-power-hidden-text-1-main">
                  <div
                    className={`nxt-power-hidden-text-1 ${
                      hide1 ? "nxt-power-hidden-text-1-hide" : ""
                    } ${hide2 ? "nxt-power-hidden-text-1-hide" : ""} ${
                      hide3 ? "nxt-power-hidden-text-1-hide" : ""
                    }`}
                  >
                    <p className="nxt-power-hidden-text-1-p">
                      <span>Streamlined Operations :</span> Say goodbye to
                      inefficiencies. We optimize your operations, allowing you
                      to do more with less. This translates to reduced costs
                      higher productivity, and improved profitability.
                    </p>
                  </div>
                  <div
                    className={`nxt-power-hidden-text-2 ${
                      hide1 ? "nxt-power-hidden-text-2-hide" : ""
                    }`}
                  >
                    <p className="nxt-power-hidden-text-1-p">
                      <span>Exponential Growth</span> : Our innovative IT
                      Solutions Are Tailored To Supercharge Your Growth. With
                      Our Expertise, You'll Expand Your Horizons, Reach New
                      Markets, And Scale Your Business To Levels You've Only
                      Dreamed Of..
                    </p>
                  </div>
                  <div
                    className={`nxt-power-hidden-text-3 ${
                      hide2 ? "nxt-power-hidden-text-3-hide" : ""
                    }`}
                  >
                    <p className="nxt-power-hidden-text-1-p">
                      <span>Streamlined Operations :</span> Say goodbye to
                      inefficiencies. We optimize your operations, allowing you
                      to do more with less. This translates to reduced costs
                      higher productivity, and improved profitability.,
                    </p>
                  </div>
                  <div
                    className={`nxt-power-hidden-text-4 ${
                      hide3 ? "nxt-power-hidden-text-4-hide" : ""
                    }`}
                  >
                    <p className="nxt-power-hidden-text-1-p">
                      <span>Exponential Growth</span> : Our innovative IT
                      Solutions Are Tailored To Supercharge Your Growth. With
                      Our Expertise, You'll Expand Your Horizons, Reach New
                      Markets, And Scale Your Business To Levels You've Only
                      Dreamed Of..,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="nxt-power-responsive-in-power">
              <NxtPowerResponsive />
            </div>
          </div>
        </div>
        <div className="nxt-power-text-scroll">
          <TextScroll TextScrollText="nxt-power-text-scroll-p" />
        </div>
      </div>
    </>
  );
};

export default NxtSkillsPower;
