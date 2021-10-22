import React,{ useState} from "react";
import "./Student-outcomes.css";
import sIcon2 from "../../../../assets/images/menuSt2.png";
import {Card2} from "../../../Utils/Card copy/Card"
import {Upload, Button} from 'antd';
import Select from 'react-select';
import { colourOptions } from './data.ts';

function comprobar()
{   
    if (document.getElementById("chec").checked)
      document.getElementById('boton').readOnly = false;
        
    else
      document.getElementById('boton').readOnly = true;
        
}


export default function StudentOutcomes() {

    // const[inputSelected, setinputSelected]=useState(false);

    // const[checkSelected, setCheckSelected]=useState(false);

    
    
    // const handleChangeCheckbox= () => {
    //     if(onclick=true){
    //         setinputSelected= true;
    //     }
    //     else{
    //         setinputSelected= false;
    //     }
    // }
    
    
    
    return (
        <div className="contStuOut">
            
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
                    <div className="contStuOutContenido3">
                        <form>
                            {/* <p>
                            <input type="checkbox" Onclick={handleChangeCheckbox}  name="checkinput" ></input>
                            
                            </p>
                            <p> 
                            <input className="contStuOutContenido2" type="text" id="caja" disabled={!inputSelected} ></input>
                            </p> */}
                            <input name="chec" type="checkbox" id="chec" onChange={comprobar} ></input>
                            
    
                            <input name="text" id="boton" readOnly></input>
                        
                        </form>
                    </div>
                    
                    
                </div>
                
                
                <div className="contStuOut4">
                    
                    <div className="ContStuOutTex">
                    <b>
                    Read carefully the performance indicators before reading the essay. Then, read the essay and determinate the level of the attainment for each indicator. Select just one option.
                    </b>
                    </div>
                </div>

                <div className="contStuOut4">
                    
                    <div className="ContStuOutTex">
                        <b>
                            SWITCH
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
                    <button className="calificarTarea-button">
                        
                        Calificar tarea
                        
                        
                     </button>
                </div>
              
            </div>
            
            
                
            
    
        </div>

        
    );

}





