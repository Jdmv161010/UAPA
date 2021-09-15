import React from "react";
import "./MainTemplate.scss";

export const MainTemplate = ({ title, children }) => {
  return (
    <React.Fragment>
      <div className="col title">{title}</div>
      <div className="custom-container-as">{children}</div>
    </React.Fragment>
  );
};
