import React, { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import sIcon1 from "../../../assets/images/menuSt1-gray.png";
import sIcon2 from "../../../assets/images/menuSt2.png";
import sIcon3 from "../../../assets/images/menuSt3.png";
import { Homeworks } from "../Homeworks/Homeworks";
import { HomeworksDetail } from "../HomeworksDetail/HomeworksDetail";
import "./StudentProfile.css";
import CoEvaluation from "../CoEvaluation/CoEvaluation.js";
import { useDispatch, useSelector } from "react-redux";
import { getHomeworksData } from "../../../store/actions/aesciActions";






export const StudentProfile = () => {
  const homeworks = [
    { title: `Add "Nuevo"` },
    { title: `Add "Dio"` },
    
  ];

  const state = useSelector(state => state.aesci.Homeworks)
  const { url, path } = useRouteMatch();
  const dispatch = useDispatch()
  
  const handleGetHomeworks = () => {
    dispatch(getHomeworksData("Jose"));
  }
  
  

  return (
    <React.Fragment>
      
      <Switch>
        <Route exact path={path}>
          <div className="col title">Menu</div>
          <div className="custom-container">
            <div className="custom-contentt">
              <div className="custom-img-container-studentt">
                <img
                  src={sIcon1}
                  className="custom-img-student"
                  alt="Review Student Outcomes Assessment"
                />
              </div>
              <span>
                {/* <Link to={`${url}/`}> */}
                  Review Student
                  <br />
                  Outcomes Assessment
                {/* </Link> */}
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
              <span onClick={handleGetHomeworks}>
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
                <Link to={`${url}/CoEvaluation`}>
                  Assess another
                  <br />
                  student
                </Link>
              </span>
            </div>
          </div>
        </Route>
        <Route path={`${url}/submissions`}>
          <Homeworks listHomeworks={state} />
        </Route>
        <Route path={`${url}/CoEvaluation`}>
          <CoEvaluation  />
        </Route>

      </Switch>
    </React.Fragment>
  );
};
