import React from "react";
import {useHistory} from "react-router-dom";
import "./Assign-Task.css";




export default function AssignTask() {
    
    return (
        <div className="contAssign">
            <div className="contAssign1">
                    <div className="col element title">
                    Assign Task To Students
                    </div>
            </div>
            
            <div className="contAssign2">
                <div className="firstC">
                    <div className="Course">
                    Course
                    </div>
                    <div className="Design">
                        
                        <label for="Des"> </label> 
                            <select nameclass="Des">
                                <option disabled="">Design of chemical and Biochemical processes</option>
                                <option value="Desuno">Design of chemical and Biochemical processes 1</option>
                                <option value="Desdos">Design of chemical and Biochemical processes 2</option>
                                
                            </select>
        
                    </div>
                </div>
                <div className="firstC">
                    <div className="Course">
                    Student Outcome
                    </div>
                    <div className="Design">
                        
                        <label for="StudentO"> </label> 
                            <select nameclass="StudentO">
                                <option disabled="">1.Ability to communicate effectively with a range of audiences</option>
                                <option value="SO">2.Ability to communicate effectively with a range of audiences</option>
                                <option value="SO">3.Ability to communicate effectively with a range of audiences</option>
                                
                            </select>
        
                    </div>
                    

                </div>
                <div className="firstC">
                    <div className="Course">
                    Task name
                    </div>
                    <input className="Design" >
                    {/* Ensayo */}
                    </input>
                </div>
                <div className="firstC">
                    <div className="Course">
                    Deadline
                    </div>
                    <div className="CourseDate">
                    Date 
                    </div>
                    <div className="DesignDate">
                        <form action="" method="">
                            <input type="date"></input>
                            
                        </form>
                    </div>
                    <div className="CourseDate">
                    Hour
                    </div>
                    <div className="DesignDate">
                        <form action="" method="">
                            <input type="time"></input>
                            
                        </form>
                    </div>
                </div>
                <div className="firstB">
                    <div className="CourseTask">
                    Task description
                    </div>
                    <input className="DesignTask">
                    {/* Dear students...
                    <br />
                    According to the reading of the book "seeds of deception" by jeffrey M. Smith, write an essay in English no longer than 5 pages. */}
                    

                    </input>
                </div>
                
                    
                
            </div>
            
                
            
    
        </div>

        
    );

}

/*
Fulfill Self-Assesment of house
Course Development



*/
