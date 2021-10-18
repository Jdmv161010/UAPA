import React from "react";
import pIcon1 from "../../../assets/images/reviewPr1.png";
import pIcon2 from "../../../assets/images/reviewPr2.png";
import pIcon3 from "../../../assets/images/reviewPr3.png";
import pIcon4 from "../../../assets/images/reviewPr4.png";
import Edit1 from "../../../assets/images/Edit1.png";
import Edit2 from "../../../assets/images/Edit2.png";
import Edit3 from "../../../assets/images/Edit3.png";
import Edit4 from "../../../assets/images/Edit4.png";
import "./ProfessorProfile.css";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { Assessments } from "./Self-Assessment/Self-Assessment";
import Fulfill from "./Fulfill/Fulfill";
import AssignTask from "./Assign-Task/Assign-Task";
import StudentOutcomes from "./Student-outcomes/Student-outcomes";
import HomeworkPicker from "./HomeworkPicker/HomeworkPicker";


export const ProfessorProfile = () => {


  const { url, path } = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={path}>
          <div className="col title">Review</div>
          <div className="custom-container">
            <div className="custom-content">
              <div className="custom-img-container-professorDis">
                <img 
                  src={pIcon1} 
                  className="custom-img-professor"
                  alt="Student Outcomes Assessment" />
              </div>
              <span>
                <Link to={`${url}/HomeworkPicker`}>
                Student Outcomes
                <br />
                Assessment
                </Link>
              </span>
            </div>
            <div className="custom-content">
              <div className="custom-img-container-professor">
                <img 
                  src={pIcon2} 
                  className="custom-img-professor"
                  alt="Self-Assessment Results Report" />
              </div>
              <span>
                {/* <Link to={`${url}/self`}> */}
                Self-Assessment Results
                <br />
                Report
                {/* </Link> */}
              </span>
            </div>
            <div className="custom-content">
              <div className="custom-img-container-professor">
                <img src={pIcon3} 
                className="custom-img-Professor"
                alt="Continuous Improvement Process" />
              </div>
              <span>
                {/* <Link to={`${url}/`}> */}
                Continuous
                <br />
                Improvement Process
                {/* </Link> */}
              </span>
            </div>
            <div className="custom-content">
              <div className="custom-img-container-professor">
                <img src={pIcon4} 
                className="custom-img-Professor"
                alt="Monitoring Action Plan" />
              </div>
              <span>
                {/* <Link to={`${url}/`}> */}
                Monitoring Action Plan
                {/* </Link> */}
              </span>
            </div>
          </div>
          <div className="col title">Edit</div>
          <div className="custom-container">
            <div className="custom-content">
              <div className="custom-img-container-professorDis">
                <img src={Edit1} 
                className="custom-img-Professor"
                alt="Student Outcomes Assessment" />
              </div>
              <span>
                <Link to={`${url}/AssignTask`}>
                Assign task to students
                </Link>
              </span>
            </div>
            <div className="custom-content">
              <div className="custom-img-container-professor">
                <img src={Edit2} 
                className="custom-img-Professor"
                alt="Studen Outcomes Assessment" />
              </div>
              <span>
                {/* <Link to={`${url}/Fulfill`}> */}
                Fulfill Self-Assesment
                <br />
                of course
                {/* </Link> */}
              </span>
            </div>
            <div className="custom-content">
              <div className="custom-img-container-professor">
                <img src={Edit4} 
                className="custom-img-Professor"
                alt="Studen Outcomes Assessment" />
              </div>
              <span>
                {/* <Link to={`${url}/`}> */}
                Edit Continuous
                <br />
                Improvement Process
                {/* </Link> */}
              </span>
            </div>
            <div className="custom-content">
              <div className="custom-img-container-professor">
                <img src={Edit3} 
                className="custom-img-Professor"
                alt="Studen Outcomes Assessment" />
              </div>
              <span>
                {/* <Link to={`${url}/`}> */}
                Edit Monitoring
                <br />
                Action Plan
                {/* </Link> */}
              </span>
            </div>
          </div>
        </Route>
        <Route path={`${url}/StudentAssesment`}>
          <StudentOutcomes  />
        </Route>
        <Route path={`${url}/self`}>
          <Assessments  />
        </Route>
        <Route path={`${url}/Fulfill`}>
          <Fulfill  />
        </Route>
        <Route path={`${url}/AssignTask`}>
          <AssignTask  />
        </Route>
        <Route path={`${url}/HomeworkPicker`}>
          <HomeworkPicker  />
        </Route>

      </Switch>
    </React.Fragment>
  );
};



        

      
        
        
