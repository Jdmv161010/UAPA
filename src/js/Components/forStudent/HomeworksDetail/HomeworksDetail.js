import React from "react";
import sIcon2 from "../../../../images/menuSt2.png";
import { Card } from "../../Utils/Card/Card";
import "./HomeworksDetail.scss";

export const HomeworksDetail = ({ homework }) => {
  return (
    <div className="custom-container-s">
      <div className="custom-content-s">
        <span className="custom-span-s">
          {/* {homework.detail} */}
          Dear Students,
          <br />
          According to the reading of the book "Seeds of deception" by Jeffrey
          M. Smith, write an essay in English no longer than 5 pages.
        </span>
      </div>

      <Card
        img={sIcon2}
        // title={homework.title}
        title={`Assess "Póster de Diseño de Procesos Químicos y Bioquímicos"`}
        width="100%"
      />
    </div>
  );
};
