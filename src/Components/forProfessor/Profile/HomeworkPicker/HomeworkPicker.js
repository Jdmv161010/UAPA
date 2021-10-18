import React from "react";
import "./HomeworkPicker.css";
import {
    Link,
    Route,
    useHistory,
    useRouteMatch,
    Switch,
  } from "react-router-dom";
import { publicRoutes } from "../../../../router/routes";
import StudentOutcomes from "../Student-outcomes/Student-outcomes";



export default function HomeworkPicker() {
    
    const { url, path } = useRouteMatch();
    
    return (
        <React.Fragment>
        <Switch>
        <Route exact path={path}>
        <div className="contHomePicker">
            
            <div className="col element title">
            HomeworkPicker
            </div>

            <div className="contTareas">
                <div className="firstC">
                    <div className="Course">
                    Materia
                    </div>
                    <div className="Design">
                        
                            <label for="Materias"> </label> 
                            <select nameclass="Materias">
                                <option disabled="">Select the matter</option>
                                <option value="Uno">uapapp_fibog</option>
                                <option value="Dos">Programacion 1</option>
                                
                            </select>
    
                    </div>
                </div>
                <div className="firstC">
                    <div className="Course">
                    Tareas
                    </div>
                    <div className="Design">
                        
                        <label for="Name"> </label> 
                            <select nameclass="Name">
                                <option disabled="">Select the homework</option>
                                <option value="UNO">Tarea 1</option>
                                <option value="DOS">Tarea 2</option>
                                
                            </select>
        
                    </div>
                </div>
                
                

                
                
                
                    
                
            </div>
            {/* <button className="calificarTarea-button"
                    onClick={() => history.push("/StudentAssesment")}
                >
                Calificar Tarea
            </button> */}
            
            
            
            <button className="calificarTarea-button">
                    <Link to={`${url}/StudentAssesment`}>
                    Calificar tarea
                    
                    </Link>
            </button>
            

        </div>
        </Route>
        <Route path={`${url}/StudentAssesment`}>
                <StudentOutcomes  />
        </Route>
        
        </Switch>
        </React.Fragment>
        
    );

}

