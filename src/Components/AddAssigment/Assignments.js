//Core
import React, {useState} from "react";
//Ant design
import {Upload, Button, message} from 'antd';
import {UploadOutlined} from '@ant-design/icons';

import './Assignments.css';
import {useHistory} from "react-router-dom";

export default function Assignments() {


    const [user, setUser] = useState({
        username: "",
        password: "",
        selected: 1
    });

    const [assignments, setAssignments] = useState({
        hasAssignments: true,
        title: "Ensayo de Diseño de Procesos Químicos y Bioquímicos",
        subtitle: `Para preparar el examen No. 3 les recomiendo realizar todos los ejercicios de los capítulos 7, 8, 9, 10 del libro guía que tienen en las herramientas del Classroom, deben saber explicar cada desarrollo en detalle.
            Aquí unos cuantos ejercicios propuestos de cada capítulo.
            
            Capitulo 7:
            1-2-3-7-8-13-16-20-30-32-36-38-40-44-48
            Capitulo 8:
            3-4-5-9-12-15-16-21-23-26-30-34
            Capitulo 9:
            1-3-5-6-8-16-19-27-31-34-35-36-37-41-49-50-52-57
            Capítulo 10:
            7-10-14-16-17
        `,
        assignments: [],
    });


    const history = useHistory();

    return (
        <div>

            <main className={"Assignments"}>
                <button className={""} onClick={() => history.push("/home")}>
                    Volver
                </button>
                <h1 className={"Assignments__title"}>Add "{assignments.title}"</h1>
                <h2 className={"Assignments__subtitle"}>
                    {assignments.subtitle}

                </h2>
                <div className={"Assignments__upload"}>
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                    >
                        <Button icon={<UploadOutlined/>}>Upload</Button>
                    </Upload>
                </div>


            </main>

        </div>
    );
}