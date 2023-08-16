/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Work = ({ className }) => {
  return (
    <div className={`work ${className}`}>
      <div className="column">
        <img className="isaribi" alt="Isaribi" src="/img/isaribi-1.png" />
      </div>
      <div className="isaribi-personal-wrapper">
        <div className="isaribi-personal">
          Isaribi
          <br />
          personal project
          <br />
          2023
        </div>
      </div>
    </div>
  );
};
