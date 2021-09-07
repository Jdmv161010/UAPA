import React, { useState } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import sIcon1 from "../../../assets/images/menuSt1.png";
import sIcon2 from "../../../assets/images/menuSt2.png";
import sIcon3 from "../../../assets/images/menuSt3.png";
import { MainTemplate } from "../../Utils/MainTemplate/MainTemplate";
import { Homeworks } from "../Homeworks/Homeworks";
import { HomeworksDetail } from "../HomeworksDetail/HomeworksDetail";
import "./StudentProfile.css";

export const StudentProfile = () => {
  const homeworks = [
    { title: `Add "Ensayo de Diseño de Procesos Químicos y Bioquímicos"` },
    { title: `Assess"Póster de Diseño de Procesos Químicos y Bioquímicos"` },
    { title: `Add "Ensayo de Diseño de Procesos Químicos y Bioquímicos"` },
    { title: `Assess"Póster de Diseño de Procesos Químicos y Bioquímicos"` },
  ];

  let history = useHistory();

  return (
    <React.Fragment>
      <div className="col title">Menu</div>
      <div className="custom-container">
        <div className="custom-content">
          <div className="custom-img-container-student">
            <img
              src={sIcon1}
              className="custom-img-student"
              alt="Review Student Outcomes Assessment"
            />
          </div>
          <span>
            Review Student
            <br />
            Outcomes Assessment
          </span>
        </div>
        <div className="custom-content">
          <div className="custom-img-container-student">
            <img
              src={sIcon2}
              className="custom-img-student"
              alt="Add submission of courses"
            />
          </div>
          <span>
            Add submission of
            <br />
            courses
          </span>
        </div>
        <div className="custom-content">
          <div className="custom-img-container-student">
            <img
              src={sIcon3}
              className="custom-img-student"
              alt="Asses another student"
            />
          </div>
          <span>
            Asses another
            <br />
            student
          </span>
        </div>
      </div>
      <MainTemplate title="Add submission of courses">
        <Homeworks listHomeworks={homeworks} />
      </MainTemplate>

      <MainTemplate
        title={`Add "Ensayo de Diseño de Procesos Químicos y Bioquímicos`}
      >
        <HomeworksDetail homework={homeworks} />
      </MainTemplate>
    </React.Fragment>
  );
};
