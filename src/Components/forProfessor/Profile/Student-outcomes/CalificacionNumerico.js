import React,{ useState} from "react";
import "./CalificacionNumerico.css"

export default function CalificacionNumerico() {

return(

        <div className="ContCalificacionNumerico">
            <form action="" class="formulario">
                <div class="radio">
                    <b>    
                    The thesis of the essay is clear and properly delimited:
                    </b>
                    <p>
                        <input type="radio" name="tipo" id="check1"></input>
                        <label for="check1">
                            1
                        </label>
                        
                    </p>
                    <p>
                        <input type="radio" name="tipo" id="check2"></input>
                        <label for="check2">
                            2
                        </label>
                        
                    </p>
                    <p>
                        <input type="radio" name="tipo" id="check3"></input>
                        <label for="check3">
                            3
                        </label>
                        
                    </p>
                    <p>
                        <input type="radio" name="tipo" id="check4"></input>
                        <label for="check4">
                            4
                        </label>
                        
                    </p>
                    <p>
                        <input type="radio" name="tipo" id="check5"></input>
                        <label for="check5">
                            5
                        </label>
                        
                    </p>
                </div>
            </form>
            
                                

                            
        </div>

                

);
}