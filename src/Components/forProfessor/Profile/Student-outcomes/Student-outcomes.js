import React,{ useState, Component } from "react";
import "./Student-outcomes.css";
import sIcon2 from "../../../../assets/images/menuSt2.png";
import {Card2} from "../../../Utils/Card copy/Card"
import {Upload, Button} from 'antd';
import Select from 'react-select';
import { colourOptions } from './data.ts';
import CalificacionNumerico from "./CalificacionNumerico";
import CalificacionTexto from "./CalificacionTexto";
import {
    Link,
    Route,
    useHistory,
    useRouteMatch,
    Switch,
  } from "react-router-dom";
import HomeworkPicker from "../HomeworkPicker/HomeworkPicker";

function comprobar()
{   
    if (document.getElementById("chec").checked)
      document.getElementById('boton').readOnly = false;
        
    else
      document.getElementById('boton').readOnly = true;
        
};



export default function StudentOutcomes() {
    const { url, path } = useRouteMatch();
    return (
        <React.Fragment>
        <Switch>
        <Route exact path={path}>
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
                            
                            <input name="chec" type="checkbox" id="chec" onChange={comprobar} ></input>
                            
    
                            <input name="text" id="boton" readOnly></input>
                        
                        </form>
                    </div>
                    
                    
                </div>
                
                {/* <div className="contStuOut3">
                    <div className="contStuOutTitulo">
                    type of qualification

                    </div>
                    <div className="contStuOutContenido3">
                        
                    </div>
                    
                    
                </div> */}

                <div className="contStuOut4">
                    
                    <div className="ContStuOutTex">
                    <b>
                    Read carefully the performance indicators before reading the work. Then, read the work and determinate the level of the attainment for each indicator. Select just one option.
                    </b>
                    </div>
                </div>



                <div className="contStuOut5">
                    
                    <div className="ContStuOutTex2">
                            <CalifiacionF></CalifiacionF>

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
                        
                    <Link to={`${url}/HomeworkPicker`}>
                    Asses work
                    
                    </Link>
                        
                        
                     </button>
                </div>
              
            </div>

        </div>
        </Route>
        <Route path={`${url}/HomeworkPicker`}>
                <HomeworkPicker  />
        </Route>
        </Switch>
    </React.Fragment>
    );

};


 class CalifiacionF extends React.Component {
    state = {
        component: <CalificacionTexto></CalificacionTexto>  //Esta es la propiedad del estado donde va a estar el componente que se muestra en el momento
    }

    changeComponent = (param) => {//esta es la funcion donde cambio de componente a mostrar
        this.setState({
            component: param
        });

    }
    render() {
        return (
          <div clasname="ContStuOutTex3" defaultSelectedKeys={['1']}>
            {/* Este es el boton 1 */}
            <button id="btn-atras" className="calificacionTarea-button" onClick={() => this.changeComponent(<CalificacionTexto />)} key="1">
                Textual Assesment
            </button>

            {/* Este es el boton 2 */}
            <button id="btn-siguiente" className="calificacionTarea-button" onClick={() => this.changeComponent(<CalificacionNumerico />)} key="2">
                Numeric Assesment
            </button>
            
            {this.state.component}
             
            
            
          </div>
        );
      }

}


