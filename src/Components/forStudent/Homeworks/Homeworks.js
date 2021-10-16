import React, { useState } from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";

import sIcon2 from "../../../assets/images/menuSt2.png";

import { Card } from "../../Utils/Card/Card";
import { MainTemplate } from "../../Utils/MainTemplate/MainTemplate";
import { HomeworksDetail } from "../HomeworksDetail/HomeworksDetail";
import "./Homeworks.css";


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
            title={`Add "Nuevo"`}
          >
            <HomeworksDetail homework={listHomeworks} />
          </MainTemplate>
        </Route>
      </Switch>
    </div>
  );
};
