import React from "react";
import { Work } from "../../components/Work";
import "./style.css";

export const GalleryOverview = () => {
  return (
    <div className="gallery-overview">
      <Work className="work-instance" />
      <Work className="work-instance" />
      <Work className="work-instance" />
      <Work className="work-instance" />
    </div>
  );
};
