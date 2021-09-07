// Core
import React from "react";
//Styles
import './Footer.scss';
//Images
import logoOrgullo from './../../assets/images/log_orgullo.png';
import logoOrgulloBlack from './../../assets/images/log_orgullo_black.png';
import logoGobierno from './../../assets/images/log_gobiern.png';
import logoAgencia from './../../assets/images/log_agenc.png';
import logoAgenciaBlack from './../../assets/images/log_agenc_black.png';
import logoContraloria from './../../assets/images/log_contra.png';

function Footer() {
    return (
        <footer className={"Footer"}>
            <nav className="Footer-nav">
                <ul className="Footer-nav__list print--notPrintable">
                    <a className={"Footer-nav__link"} href="https://www.legal.unal.edu.co" target="_top">Régimen
                        Legal</a>
                    <a className={"Footer-nav__link"} href="https://contratacion.unal.edu.co"
                       target="_top">Contratación</a>
                    <a className={"Footer-nav__link"} href="https://launalcuenta.unal.edu.co/" target="_top">Rendición
                        de cuentas</a>
                    <a className={"Footer-nav__link"} href="https://www.pagovirtual.unal.edu.co/" target="_top">Pago
                        Virtual</a>
                    <a className={"Footer-nav__link"} href="https://siga.unal.edu.co" target="_top">Calidad</a>


                </ul>
                <ul className="Footer-nav__list print--notPrintable">
                    <a className={"Footer-nav__link"} href="https://personal.unal.edu.co" target="_top">Talento
                        humano</a>
                    <a className={"Footer-nav__link"} href="https://personal.unal.edu.co" target="_top">Ofertas de
                        empleo</a>
                    <a className={"Footer-nav__link"} href="https://docentes.unal.edu.co/concurso-profesoral/"
                       target="_top">Concurso docente</a>
                    <a className={"Footer-nav__link"} href="https://controlinterno.unal.edu.co/" target="_top">Control
                        interno</a>
                    <a className={"Footer-nav__link"} href="https://unal.edu.co/buzon-de-notificaciones/"
                       target="_self">Buzón de notificaciones</a>
                </ul>

                <ul className="Footer-nav__list print--notPrintable">
                    <a className={"Footer-nav__link"} href="https://correo.unal.edu.co" target="_top">Correo
                        institucional</a>
                    <a className={"Footer-nav__link"} href="https://redessociales.unal.edu.co" target="_top">Redes
                        Sociales</a>
                    <a className={"Footer-nav__link"} href="https://unal.edu.co/quejas-y-reclamos/" target="_self">Quejas
                        y reclamos</a>
                    <a className={"Footer-nav__link"} href="https://unal.edu.co/encuesta/" target="_self">Encuesta</a>
                    <a className={"Footer-nav__link"} href="https://estadisticas.unal.edu.co/"
                       target="_top">Estadísticas</a>
                </ul>
                <ul className="Footer-nav__list print--notPrintable">
                    <a className={"Footer-nav__link"} href="/">Mapa del sitio</a>
                    <a className={"Footer-nav__link"} href="/">FAQ</a>
                    <a className={"Footer-nav__link"} href="https://unal.edu.co/atencion-en-linea/" target="_self">Atención
                        en línea</a>
                    <a className={"Footer-nav__link"} href="/">Contáctenos</a>
                    <a className={"Footer-nav__link"} href="/">Glosario</a>
                </ul>
            </nav>
            <div className="Footer-info">
                <ul className="Footer-info__list">
                    <li className="Footer-info__item"><b>Contacto página web:</b></li>
                    <li className="Footer-info__item">Dirección ...</li>
                    <li className="Footer-info__item">Edificio ...</li>
                    <li className="Footer-info__item">Bogotá D.C., Colombia</li>
                    <li className="Footer-info__item">(+57 1) 316 5000 Ext.</li>
                </ul>
                <ul className="Footer-info__list">
                    <ul className="Footer-info__item"><a rel="noreferrer"
                                                         href="https://unal.edu.co/fileadmin/user_upload/docs/legal.pdf"
                                                         target="_blank">&copy; Copyright 2019</a></ul>
                    <ul className="Footer-info__item">Algunos derechos reservados.</ul>
                    <ul className="Footer-info__item"><a
                        title="Comuníquese con el administrador de este sitio web"
                        href="mailto:EMAIL@unal.edu.co">EMAIL@unal.edu.co</a></ul>
                    <ul className="Footer-info__item"><a href="index.html#">Acerca de este sitio web</a></ul>
                    <ul className="Footer-info__item">Actualización:14/05/21</ul>

                </ul>
            </div>
            <div className="Footer-sponsors print--notPrintable">
                <ul className="Footer-sponsors__list">
                    <li className="Footer-sponsors__item">
                        <a className={"Footer-sponsor"} href="https://orgullo.unal.edu.co/">
                            <img className="Footer-sponsor__img" alt="Orgullo UN"
                                 src={logoOrgullo}/>
                            {/*NOTE: No sé porque esta imagen está si no se muestra nunca*/}
                            <img
                                className="Footer-sponsor__img Footer-sponsor__img--printable print print--onlyOnPrint"
                                alt="Orgullo UN"
                                src={logoOrgulloBlack}/>
                        </a>
                    </li>
                    <li className="Footer-sponsors__item">
                        <a className={"Footer-sponsor"} href="https://www.gov.co/">
                            <img
                                className=""
                                alt="Portal Único del Estado Colombiano"
                                src={logoGobierno}/>
                        </a>
                    </li>
                    <li className="Footer-sponsors__item">
                        <a className={"Footer-sponsor"} href="https://agenciadenoticias.unal.edu.co">
                            <img className="Footer-sponsor__img" alt="Agencia de Notwicias"
                                 src={logoAgencia}/>
                            {/*NOTE: No sé porque esta imagen está si no se muestra nunca*/}
                            <img
                                className="Footer-sponsor__img Footer-sponsor__img--printable print print--onlyOnPrint"
                                alt="Agencia de Noticias"
                                src={logoAgenciaBlack}/>
                        </a>
                    </li>
                    <li className="Footer-sponsors__item">
                        <a className={"Footer-sponsor"} href="https://www.contaduria.gov.co/">
                            <img
                                className=""
                                alt="Contaduría General de la República"
                                src={logoContraloria}/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
