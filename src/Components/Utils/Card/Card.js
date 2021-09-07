import React from "react";
import "./Card.css";

export const Card = ({ img, title, width = "48%" }) => {
  return (
    <div className="custom-content-as" style={{ width }}>
      <div className="custom-img-container-student-as">
        <img src={img} className="custom-img-student" alt={title} />
      </div>
      <span className="custom-span-as">{title}</span>
    </div>
  );
};
