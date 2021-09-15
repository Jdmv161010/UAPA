import React from "react";
import sIcon2 from "../../../../images/menuSt2.png";
import { Card } from "../../Utils/Card/Card";
import "./Homeworks.scss";

export const Homeworks = ({ listHomeworks }) => {
  return (
      <div className="custom-homeworks-container">
        {listHomeworks.map((homework) => (
          <Card img={sIcon2} title={homework.title} />
        ))}
      </div>
  );
};
