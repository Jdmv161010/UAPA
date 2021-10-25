import React,{ useState} from "react";
import "./CalificacionTexto.css";

export default function CalificacionTexto() {

return(

        <div className="ContCalificacionTexto">
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

                

);
}