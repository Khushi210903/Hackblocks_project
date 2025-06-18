import React from "react";
import { sponserData } from "./data";
import SponserList from "./SponserList";
import "./sponsored.css";

const Sponser = () => {
  return (
    <div className="slider" id="Sponsor">
      <div className="about-head-section">
        <h1 className="heading-tag-line">Sponsors</h1>
        <hr className="heading-underline" />
      </div>
      <SponserList items={sponserData} />
    </div>
  );
};
export default Sponser;
