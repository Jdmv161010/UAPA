import React from "react";
import pIcon5 from "../../../../assets/images/reviewPr5.png";
import pIcon6 from "../../../../assets/images/reviewPr6.png";
import pIcon7 from "../../../../assets/images/reviewPr7.png";
import "./Self-Assessment.css";



export const Assessments = ({ listAssessments }) => {


  return (


    <React.Fragment>
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

/*

export const Homeworks = ({ listHomeworks }) => {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <MainTemplate title="Add submission of courses">
            <div className="custom-homeworks-container">
              {listHomeworks.map((homework) => (
                <Card
                  img={sIcon2}
                  title={<Link to={`${url}/homeworks`}>{homework.title}</Link>}
                />
              ))}
            </div>
          </MainTemplate>
        </Route>
        <Route path={`${url}/homeworks`}>
          <MainTemplate
            title={`Add "Ensayo de Diseño de Procesos Químicos y Bioquímicos`}
          >
            <HomeworksDetail homework={listHomeworks} />
          </MainTemplate>
        </Route>
      </Switch>
    </div>
  );

*/