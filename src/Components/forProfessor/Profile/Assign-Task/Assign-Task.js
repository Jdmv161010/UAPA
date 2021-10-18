import React from "react";
import "./Assign-Task.css";
import Select from 'react-select';
import { StuOutOptions } from './dataAssign.ts';




export default function AssignTask() {
    
    return (
        <div className="contAssign">
            
            <div className="col element title">
            Assign Task To Students
            </div>
            
            <div className="contAssign2">
                <div className="contAssign3">
                    <div className="contAssignTitulo">
                    Course
                    </div>
                    <div className="contAssignContenido">
                        
                        <label for="Des"> </label> 
                            <select nameclass="Des">
                                <option disabled="">Select the course</option>
                                <option value="Desuno">Introduccion (20000)</option>
                                <option value="Desdos">Introduccion a las pruebas (1)</option>
                                
                        </select>
        
                    </div>
                </div>
                <div className="contAssign3">
                    <div className="contAssignTitulo">
                    Student Outcome
                    </div>
                    <div className="contAssignContenido">
                        <Select
                            
                            isMulti
                            name="colors"
                            options={StuOutOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                        
        
                    </div>
                    

                </div>
                <div className="contAssign3">
                    <div className="contAssignTitulo">
                    Task name
                    </div>
                    <input className="contAssignContenido" >
                    {/* Ensayo */}
                    </input>
                </div>
                <div className="contAssign3">
                    <div className="contAssignTitulo">
                    Deadline
                    </div>
                    <div className="contAssignDateT">
                    Date 
                    </div>
                    <div className="contAssignDateC">
                        <form action="" method="">
                            <input type="date"></input>
                            
                        </form>
                    </div>
                    <div className="contAssignDateT">
                    Hour
                    </div>
                    <div className="contAssignDateC">
                        <form action="" method="">
                            <input type="time"></input>
                            
                        </form>
                    </div>
                </div>
                <div className="contAssign4">
                    <div className="contAssignTask">
                    Task description
                    </div>
                    <input className="contAssignContenidoTask">
                    
                    </input>
                </div>

                <div className="contAssign3">
                    <div className="contAssignTitulo">
                        Add Url ( guide in pdf )
                    </div>
                    <input className="contAssignContenido" placeholder="Add your url here" >
                    {/* Ensayo */}
                    </input>
                </div>

                <div className="contAssign5">
                    <button className="EnviarTarea-button">
                        Enviar tarea 
                     </button>    
                </div>
                    
                
            </div>

    
        </div>  
    );

}

/*
Fulfill Self-Assesment of house
Course Development



*/
