// Core
import React, {useState} from 'react';
//Styles
import './AsideNavServices.scss';
//Images
import correoIcon from './../../assets/images/icnServEmail.png';
import siaIcon from './../../assets/images/icnServSia.png';
import bibliotecasIcon from './../../assets/images/icnServLibrary.png';
import convocatoriasIcon from './../../assets/images/icnServCall.png';
import identidadIcon from './../../assets/images/icnServIdentidad.png';
import btnBg from './../../assets/images/backServices.png';

function AsideNavServices() {

    const [display, setDisplay] = useState(false);

    const toggle = () => {
        setDisplay(!display);
    }

    return (
        <aside className={`AsideNav AsideNav--${display ? 'show' : 'hidden'}`}>

            <button onClick={()=>toggle()} className="AsideNav-toggleBtn" style={{backgroundImage: `url(${btnBg})`}}></button>

            {/*<div id="main" class="hsidebar">*/}
            {/*    <div class="openbtn" id="openbtnId" onclick="toggleNav() "></div>*/}
            {/*</div>*/}
            <ul className={"AsideNav__list"}>

                <li className="AsideNav__item">
                    <a className="AsideNav-option" href="http://correo.unal.edu.co" target="_blank" rel="noreferrer">
                        <img src={correoIcon}
                             alt=""
                             width="32"
                             height="32" className="AsideNav-option__icon"/>
                        <span className="Aside-option__description">Correo Electrónico</span>
                    </a>
                </li>

                <li className="AsideNav__item">
                    <a className="AsideNav-option" href="https://dninfoa.unal.edu.co" target="_blank" rel="noreferrer">
                        <img src={siaIcon}
                             width="32"
                             height="32"
                             alt="Dirección Nacional de Información Académica" className="AsideNav-option__icon"/>
                        <span className="Aside-option__description">DNINFOA - SIA</span>
                    </a>
                </li>
                <li className="AsideNav__item">
                    <a className="AsideNav-option" href="http://bibliotecas.unal.edu.co" target="_blank" rel="noreferrer">
                        <img src={bibliotecasIcon}
                             width="32" height="32"
                             alt="Biblioteca" className="AsideNav-option__icon"/>
                        <span className="Aside-option__description">Bibliotecas</span>
                    </a>
                </li>
                <li className="AsideNav__item">
                    <a className="AsideNav-option" href="http://personal.unal.edu.co" target="_blank" rel="noreferrer">
                        <img src={convocatoriasIcon}
                             width="32" height="32"
                             alt="Convocatorias" className="AsideNav-option__icon"/>
                        <span className="Aside-option__description">Convocatorias</span>
                    </a>
                </li>

                <li className="AsideNav__item">
                    <a className="AsideNav-option" href="http://identidad.unal.edu.co" target="_blank" rel="noreferrer">
                        <img src={identidadIcon}
                             width="32"
                             height="32"
                             alt="Identidad UNAL" className="AsideNav-option__icon"/>
                        <span className="Aside-option__description">Identidad UNAL</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default AsideNavServices;
