import React from "react";
// eslint-disable-next-line
import "./SectionOne.css";

function SectionOne() {
  return (
			// eslint-disable-next-line
    <div className="section-one">
      <img src="/images/section-one-background.png" alt="''"></img>
      {/* <div className=""> */}
      <h1 className="section-one__title h1">Stay Home – We’ll Deliver</h1>
      <h5 className="section-one__details h5">
        Get your groceries in less than one hour or select delivery time right
        for you
      </h5>
      {/* </div> */}
    </div>
  );
}

export default SectionOne;
