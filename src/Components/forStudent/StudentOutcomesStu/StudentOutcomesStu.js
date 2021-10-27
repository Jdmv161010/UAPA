import React from "react";
import "./StudentOutcomesStu.css";
import sIcon2 from "../../../assets/images/menuSt2.png";
import { Card2 } from "../../Utils/Card copy/Card";
import {Upload, Button} from 'antd';
import Select from 'react-select';
import { colourOptions } from './data.ts';




export default function StudentOutcomesStu() {
    
    return (
        
        <div className="contStuOutStu">
            
            <div className="col element title">
            Tarea: Nuevo
            </div>
    
            
            <div className="contStuOut2">
                <div className="contStuOut3">
                    <div className="contStuOutTitulo">
                    Student to be assesed
                    </div>
                    <div className="contStuOutContenido">
                    {/*Dropdown&checklist*/}
                    <Select
                        
                        isMulti
                        name="colors"
                        options={colourOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                        
                           
        
                    </div>
                </div>
                <div className="contStuOut3">
                    <div className="contStuOutTitulo">
                    Group of the student assesed
                    </div>
                    <div className="contStuOutContenido">
                        
                        <label for="Group"> </label> 
                            <input  >
                            {/* Ensayo */}
                            </input>
    
                    </div>
                </div>
                
                
                <div className="contStuOut4">
                    
                    <div className="ContStuOutTex">
                    <b>
                    Read carefully the performance indicators before reading the essay. Then, read the essay and determinate the level of the attainment for each indicator. Select just one option.
                    </b>
                    </div>
                </div>
                <div className="contStuOut5">
                    
                    <div className="ContStuOutTex2">
                        <form action="" class="formulario">
                            <div class="radio">
                                <b>    
                                The thesis of the essay is clear and properly delimited:
                                </b>
                                <p>
                                    <input type="radio" name="tipo" id="check1"></input>
                                    <label for="check1">
                                    The thesis is clear and properly delimited. The point of view of the author is clearly identified.
                                    </label>
                                    
                                </p>
                                <p>
                                    <input type="radio" name="tipo" id="check2"></input>
                                    <label for="check2">
                                    The thesis is clear and properly delimited.
                                    </label>
                                    
                                </p>
                                <p>
                                    <input type="radio" name="tipo" id="check3"></input>
                                    <label for="check3">
                                    There is a thesis, but it is confusing, and its scope is so wide.
                                    </label>
                                    
                                </p>
                                <p>
                                    <input type="radio" name="tipo" id="check4"></input>
                                    <label for="check4">
                                    The thesis cannot be identified.
                                    </label>
                                    
                                </p>
                            </div>
                        </form>
                        <form action="" class="formulario">
                            <div class="radio2">
                                <b>    
                                Minimum presentation criteria are fulfilled. A too short essay is one page or less, without the references. A too big essay is more than five pages. without the references:
                                </b>
                                <p>
                                    <input type="radio" name="tipo" id="check5"></input>
                                    <label for="check5">
                                    The text has an appropiate length (too short or too long). The author is clearly identified, the paragraphs are graphically differentiated, and the font size is adequate.
                                    </label>
                                    
                                </p>
                                <p>
                                    <input type="radio" name="tipo" id="check6"></input>
                                    <label for="check6">
                                    The text does not have an appropiate length (too short or too long). The author cannot be identified, the paragraphs are not graphically differentiated, and the font size is too small or too big.
                                    </label>
                                    
                                </p>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="contStuOut6">
                    <div className="contStuOutUpload">
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

                <div className="contStuOut7">
                    <a href="http://localhost:3000/aesci/profile/student/CoEvaluation"  onClick="this.href">
                        <button className="calificarTarea-button" >                           
                            Send Assessment
                        </button>
                    </a>
                </div>
              
            </div>
    
        </div>
        
        
    );

}





