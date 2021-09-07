import React from "react";
import pIcon1 from "../../../assets/images/reviewPr1.png";
import pIcon2 from "../../../assets/images/reviewPr2.png";
import pIcon3 from "../../../assets/images/reviewPr3.png";
import pIcon4 from "../../../assets/images/reviewPr4.png";
import pIcon5 from "../../../assets/images/reviewPr5.png";
import pIcon6 from "../../../assets/images/reviewPr6.png";
import pIcon7 from "../../../assets/images/reviewPr7.png";
import "./ProfessorProfile.css";

export const ProfessorProfile = () => {
  return (
    <React.Fragment>
      <div className="col title">Review</div>
      <div className="custom-container">
        <div className="custom-content">
          <div className="custom-img-container">
            <img src={pIcon1} alt="Student Outcomes Assessment" />
          </div>
          <span>
            Studen Outcomes
            <br />
            Assessment
          </span>
        </div>
        <div className="custom-content">
          <div className="custom-img-container">
            <img src={pIcon2} alt="Self-Assessment Results Report" />
          </div>
          <span>
            Self-Assessment Results
            <br />
            Report
          </span>
        </div>
        <div className="custom-content">
          <div className="custom-img-container">
            <img src={pIcon3} alt="Continuous Improvement Process" />
          </div>
          <span>
            Continuous
            <br />
            Improvement Process
          </span>
        </div>
        <div className="custom-content">
          <div className="custom-img-container">
            <img src={pIcon4} alt="Monitoring Action Plan" />
          </div>
          <span>Monitoring Action Plan</span>
        </div>
      </div>
      <div className="col title">Self Assessment Results</div>
      <div className="custom-container">
        <div className="custom-content">
          <div className="custom-img-container">
            <img src={pIcon5} alt="Studen Outcomes Assessment" />
          </div>
          <span>Course Development</span>
        </div>
        <div className="custom-content">
          <div className="custom-img-container">
            <img src={pIcon6} alt="Studen Outcomes Assessment" />
          </div>
          <span>
            Interaction with the
            <br />
            students
          </span>
        </div>
        <div className="custom-content">
          <div className="custom-img-container">
            <img src={pIcon7} alt="Studen Outcomes Assessment" />
          </div>
          <span>
            Interactions with colleagues
            <br />
            and research development
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};
