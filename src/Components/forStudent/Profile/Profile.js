import React, { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
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

  const { url, path } = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={path}>
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
                <Link to={`${url}/`}>
                  Review Student
                  <br />
                  Outcomes Assessment
                </Link>
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
                <Link to={`${url}/submissions`}>
                  Add submission of
                  <br />
                  courses
                </Link>
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
                <Link to={`${url}/`}>
                  Assess another
                  <br />
                  student
                </Link>
              </span>
            </div>
          </div>
        </Route>
        <Route path={`${url}/submissions`}>
          <Homeworks listHomeworks={homeworks} />
        </Route>
      </Switch>
    </React.Fragment>
  );
};
