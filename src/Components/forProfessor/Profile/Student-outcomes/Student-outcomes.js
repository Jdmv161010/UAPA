import React from "react";
import {useHistory} from "react-router-dom";
import "./Student-outcomes.css";
import sIcon2 from "../../../../assets/images/menuSt2.png";
import {Card2} from "../../../Utils/Card copy/Card"
import {Upload, Button} from 'antd';




export default function StudentOutcomes() {
    
    return (
        <div className="contAssign">
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
                    Select the group 
                    </div>
                </div>
                <div className="firstC">
                    <div className="Course">
                    Studen to be assesed
                    </div>
                    <div className="Design">
                    Select student name
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
                        <br />
                        - The thesis is clear and properly delimited. The point of view of the author is clearly identified.
                        <br />
                        - The thesis is clear and properly delimited.
                        <br />
                        - There is a thesis, but it is confusing, and its scope is so wide.
                        <br />
                        - The thesis cannot be identified.
                        <br />
                        <b>    
                        Minimum presentation criteria are fulfilled. A too short essay is one page or less, without the references. A too big essay is more than five pages. without the references:
                        </b>
                        <br />
                        - The text has an appropiate length (too short or too long). The author is clearly identified, the paragraphs are graphically differentiated, and the font size is adequate.

                        <br />
                        - The text does not have an appropiate length (too short or too long). The author cannot be identified, the paragraphs are not graphically differentiated, and the font size is too small or too big.
                        <br />
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

/*
Fulfill Self-Assesment of house
Course Development



*/
