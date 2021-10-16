import React from "react";
import "./CardCopy.css";

export const Card2 = ({ img, title, width = "48%" }) => {
  return (
    <div className="custom-content-as2" style={{ width }}>
      <div className="custom-img-container-student-as">
        <img src={img} className="custom-img-student" alt={title} />
        
      </div>
      <span className="custom-span-as">
        {title}
        <br />
        <>
        If could be the PDF or word document with the feedback as comments, or photograph with the feedback in handwritting
        </>
      </span>
        
    </div>
  );
};
