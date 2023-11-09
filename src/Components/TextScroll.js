import React from "react";

const TextScroll = (props) => {
  return (
    <>
      <div className="text-scroller-auto " style={{ margin: "1rem 0" }}>
        <div className="text-scroller-auto-1 ">
          <div className={`text-scroller-main-p ${props.TextScrollText}`}>
            <p style={{ color: "#2CA8FE" }}>
              Ready to take your IT game to the next level? Let's connect and
              make your vision a reality.
            </p>
            <p style={{ color: "#2CA8FE" }}>
              Ready to take your IT game to the next level? Let's connect and
              make your vision a reality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextScroll;
