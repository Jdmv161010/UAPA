import React from "react";
import "./coEvaluation.css";
import {
    Link,
    Route,
    useHistory,
    useRouteMatch,
    Switch,
  } from "react-router-dom";
import StudentOutcomesStu from "../StudentOutcomesStu/StudentOutcomesStu";
import sIcon2 from "../../../assets/images/menuSt2.png";
import { Card } from "../../Utils/Card/Card";


export default function CoEvaluation() {
    
    const { url, path } = useRouteMatch();
    
    return (
        <React.Fragment>
        <Switch>
        <Route exact path={path}>
        <div className="contCoEvaluation">
            
            <div className="col element title">
            Co Evaluation Picker 
            </div>
            <div>
                <div className="contCoEvaluationCont">
                    <Card
                    img={sIcon2}
                    title={<Link to={`${url}/tarea1`}>
                        Tarea 1
                    </Link>}
                    />
                    <Card
                    img={sIcon2}
                    title={<Link to={`${url}/tarea1`}>
                        Tarea 2
                    </Link>}
                    />
                </div>
            </div>

        </div>
        </Route>
        <Route path={`${url}/tarea1`}>
                <StudentOutcomesStu  />
        </Route>
        
        </Switch>
        </React.Fragment>
        
    );

}

