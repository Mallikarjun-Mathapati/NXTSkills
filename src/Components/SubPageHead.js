import React from "react";

const SubPageHead = (props) => {
  return (
    <>
      <div className={`about-us-heading ${props.HeaderClass}`}>
        <h2>{props.Header}</h2>
        <p>{props.SubHeader}</p>
      </div>
    </>
  );
};

export default SubPageHead;
