import React from "react";
import {useHistory} from "react-router-dom";
import "./Student-outcomes.css";
import sIcon2 from "../../../../assets/images/menuSt2.png";
import {Card2} from "../../../Utils/Card copy/Card"
import {Upload, Button} from 'antd';



export default function StudentOutcomes() {
    
    return (
        <div className="contStuOut">
            <div className="contAssign1">
                    <div className="col element title">
                    Student Outcomes
                    </div>
            </div>
            
            <div className="contAssign2">
                <div className="firstC">
                    <div className="Course">
                    Group of the student assesed
                    </div>
                    <div className="Design">
                        
                        <label for="Group"> </label> 
                            <select nameclass="Group">
                                <option disabled="">Select the group</option>
                                <option value="UNO">Group 1</option>
                                <option value="DOS">Group 2</option>
                                
                            </select>
        
                    </div>
                </div>
                <div className="firstC">
                    <div className="Course">
                    Studen to be assesed
                    </div>
                    <div className="Design">
                        
                        <label for="Name"> </label> 
                            <select nameclass="Name">
                                <option disabled="">Select the name</option>
                                <option value="UNO">Name 1</option>
                                <option value="DOS">Name 2</option>
                                
                            </select>
        
                    </div>
                </div>
                
                <div className="firstB">
                    
                    <div className="DesignTask">
                    <b>
                    Read carefully the performance indicators before reading the essay. Then, read the essay and determinate the level of the attainment for each indicator. Select just one option.
                    </b>
                    </div>
                </div>
                <div className="firstB1">
                    
                    <div className="DesignTask1">
                        <b>    
                        The thesis of the essay is clear and properly delimited:
                        </b>
                        <p>
                            <input type="checkbox" id="check1"></input>
                            <label for="check1">
                            The thesis is clear and properly delimited. The point of view of the author is clearly identified.
                            </label>
                            
                        </p>
                        <p>
                            <input type="checkbox" id="check1"></input>
                            <label for="check1">
                            The thesis is clear and properly delimited.
                            </label>
                            
                        </p>
                        <p>
                            <input type="checkbox" id="check1"></input>
                            <label for="check1">
                            There is a thesis, but it is confusing, and its scope is so wide.
                            </label>
                            
                        </p>
                        <p>
                            <input type="checkbox" id="check1"></input>
                            <label for="check1">
                            The thesis cannot be identified.
                            </label>
                            
                        </p>
                        <b>    
                        Minimum presentation criteria are fulfilled. A too short essay is one page or less, without the references. A too big essay is more than five pages. without the references:
                        </b>
                        <p>
                            <input type="checkbox" id="check1"></input>
                            <label for="check1">
                            The text has an appropiate length (too short or too long). The author is clearly identified, the paragraphs are graphically differentiated, and the font size is adequate.
                            </label>
                            
                        </p>
                        <p>
                            <input type="checkbox" id="check1"></input>
                            <label for="check1">
                            The text does not have an appropiate length (too short or too long). The author cannot be identified, the paragraphs are not graphically differentiated, and the font size is too small or too big.
                            </label>
                            
                        </p>
                        
                    </div>

                </div>
                <div className="firstB">
                    <div className="DesignTask2">
                        <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        >
                        <Card2
                            img={sIcon2}
                            // title={homework.title}
                            title={`Add the assesed document with your feedback `}
                            width="100%"
                        />
                        </Upload>
                    </div>
                    
                </div>

                
                
                
                    
                
            </div>
            
            
                
            
    
        </div>

        
    );

}



{/* <div className="Design">
                        <details >
                            <summary>Select the group </summary> 
                            <ol>
                                <li>Group 1</li>
                                <li>Group 2</li>
                                <li>Group 3</li>
                            </ol>
                        </details>
                   
                    </div> */}