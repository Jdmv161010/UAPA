import React, { useEffect } from "react";
import "./HomeworkPicker.css";
import {
    Link,
    Route,
    useRouteMatch,
    Switch,
  } from "react-router-dom";
import StudentOutcomes from "../Student-outcomes/Student-outcomes";
import { getCoursesData } from "../../../../store/actions/aesciActions";
import { useDispatch, useSelector } from "react-redux";



export default function HomeworkPicker() {
    
    const { url, path } = useRouteMatch();
    const dispatch = useDispatch();
    const {Courses} = useSelector(state => state.aesci);


    useEffect(() => {
        dispatch(getCoursesData());
        
    }, [])
        
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
                    Subject
                    </div>
                    <div className="Design">
                        
                            <label for="Materias"> </label> 
                            <select nameclass="Materias">
                                <option disabled="">Select the matter</option>
                                    {
                                        Courses.map((c,index)=>(
                                            <option value={index+1} key={index}>{c.nameCourse}</option>
                                        )
                                        )
                                    }
                                
                            </select>
    
                    </div>
                </div>
                <div className="firstC">
                    <div className="Course">
                    Homeworks
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
                    Asses work
                    
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

