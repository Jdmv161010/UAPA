import React, {Component} from "react";

import "../../../css/base.css";
import "../../../css/bootstrap.min.css";
import "../../../css/bootstrap-theme.min.css";
import "../../../css/phone.css";
import "../../../css/printer.css";
import "../../../css/reset.css";
import "../../../css/small.css";
import "../../../css/tablet.css";
import "../../../css/unal.css";

import "./unal.js";
import './jquery.js';
import {logout, isLogged} from "./../../../Auth.js"

class UnalCanvas extends Component {

    constructor(props) {
        super(props);
        this.handleSession = this.handleSession.bind(this);
        this.state = {
            logged: false
        };
    }

    handleSession = logged => {
        this.setState({logged: logged});
    };

    render() {
        let name = 'AESCI';
        return (
            <div>
                <meta charSet="utf-8"/>
                <meta name="revisit-after" content="1 hour"/>
                <meta name="distribution" content="all"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.5, user-scalable=yes"
                />
                <meta name="expires" content={1}/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="robots" content="all"/>
                <link
                    type="text/css"
                    href="../../../css/bootstrap.min.css"
                    media="all"
                />
                <link
                    type="text/css"
                    href="../../../css/bootstrap-theme.min.css"
                    media="all"
                />
                <link type="text/css" href="../../../css/reset.css" media="all"/>
                <link type="text/css" href="../../../css/unal.css" media="all"/>
                <link type="text/css" href="../../../css/base.css" media="all"/>
                <link type="text/css" href="../../../css/tablet.css" media="all"/>
                <link type="text/css" href="../../../css/phone.css" media="all"/>
                <link type="text/css" href="../../../css/small.css" media="all"/>
                <link type="text/css" href="../../../css/printer.css" media="print"/>
                <title>{name}: Universidad Nacional de Colombia</title>
                <div id="footfix">
                    <div id="services">
                        <div className="indicator hidden-xs"/>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="http://correo.unal.edu.co">
                                    <img
                                        src={require("../../../images/icnServEmail.png")}
                                        width={32}
                                        height={32}
                                        alt="Correo Electr??nico"
                                    />
                                    Correo Electr??nico
                                </a>
                            </li>
                            <li>
                                <a href="https://dninfoa.unal.edu.co">
                                    <img
                                        src={require("../../../images/icnServSia.png")}
                                        width={32}
                                        height={32}
                                        alt="Direcci??n Nacional de Informaci??n Acad??mica"
                                    />
                                    DNINFOA - SIA
                                </a>
                            </li>
                            <li>
                                <a href="http://bibliotecas.unal.edu.co">
                                    <img
                                        src={require("../../../images/icnServLibrary.png")}
                                        width={32}
                                        height={32}
                                        alt="Biblioteca"
                                    />
                                    Bibliotecas
                                </a>
                            </li>
                            <li>
                                <a href="http://personal.unal.edu.co">
                                    <img
                                        src={require("../../../images/icnServCall.png")}
                                        width={32}
                                        height={32}
                                        alt="Convocatorias"
                                    />
                                    Convocatorias
                                </a>
                            </li>
                            <li>
                                <a href="http://identidad.unal.edu.co">
                                    <img
                                        src={require("../../../images/icnServIdentidad.png")}
                                        width={32}
                                        height={32}
                                        alt="Identidad U.N."
                                    />
                                    Identidad U.N.
                                </a>
                            </li>
                        </ul>
                    </div>
                    <header id="unalTop">
                        <div className="logo">
                            <a href="http://unal.edu.co">
                                <svg width="93%" height="93%">
                                    <image
                                        xlinkHref={require("../../../images/escudoUnal.svg")}
                                        width="100%"
                                        height="100%"
                                        className="hidden-print"
                                    />
                                </svg>
                                <img
                                    src={require("../../../images/escudoUnal_black.png")}
                                    className="visible-print"
                                    alt="Escudo de la Universidad Nacional de Colombia."
                                />
                            </a>
                        </div>
                        <div className="seal">
                            <img
                                className="hidden-print"
                                alt="Escudo de la Rep??blica de Colombia"
                                src={require("../../../images/sealColombia.png")}
                                width={66}
                                height={66}
                            />
                            <img
                                className="visible-print"
                                alt="Escudo de la Rep??blica de Colombia"
                                src={require("../../../images/sealColombia_black.png")}
                                width={66}
                                height={66}
                            />
                        </div>
                        <div className="firstMenu">
                            <button
                                className="navbar-toggle collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#bs-navbar"
                                aria-controls="bs-navbar"
                                aria-expanded="false"
                            >
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <ul className="socialLinks hidden-xs">
                                {/* eslint-disable */}
                                <li>
                                    <a
                                        href="https://www.facebook.com/UNColombia"
                                        className="facebook"
                                        title="P??gina oficial en Facebook"
                                    />
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/UNColombia"
                                        className="twitter"
                                        title="Cuenta oficial en Twitter"
                                    />
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/channel/UCnE6Zj2llVxcvL5I38B0Ceg"
                                        className="youtube"
                                        title="Canal oficial de Youtube"
                                    />
                                </li>
                                <li>
                                    <a
                                        href="http://agenciadenoticias.unal.edu.co/nc/sus/type/rss2.html"
                                        className="rss"
                                        title="Suscripci??n a canales de informaci??n RSS"
                                    />
                                </li>
                                {/* eslint-enable */}
                            </ul>
                        </div>
                        <div id="bs-navbar" className="navbar-collapse collapse navigation">
                            <div className="site-url">
                                <a href="/">
                                    ingenieria.bogota.unal.edu.co/{name}/
                                </a>
                            </div>
                            <div className="buscador">
                                <div
                                    className="gcse-searchbox-only"
                                    data-resultsurl="http://unal.edu.co/resultados-de-la-busqueda/"
                                    data-newwindow="true"
                                />
                            </div>
                            <div className="mainMenu">
                                <div className="btn-group">
                                    <a href="/" className="btn btn-default">
                                        Inicio
                                    </a>
                                    <span className="caret-right"/>
                                </div>
                                <div className="btn-group">
                                    <a
                                        href="/contact"
                                        className="btn btn-default"
                                    >
                                        Cont??ctenos
                                    </a>
                                    <span className="caret-right"/>
                                </div>
                                <div className="btn-group">
                                    <a
                                        href="https://ingenieria.bogota.unal.edu.co/es/dependencias/vicedecanatura-academica/autoevaluacion-y-acreditacion.html"
                                        className="btn btn-default dropdown-toggle"
                                    >
                                        ??Quienes somos?
                                    </a>
                                    <span className="caret-right"/>
                                </div>
                                {(() => {
                                    if (isLogged()) {
                                        return (
                                            <div className="btn-group">
                                                {/*eslint-disable-next-line*/}
                                                <a
                                                    onClick={() => {
                                                        logout();
                                                    }}
                                                    className="btn btn-default"
                                                >
                                                    Cerrar Sesi??n
                                                </a>
                                                <span className="caret-right"/>
                                            </div>
                                        );
                                    }
                                })()}
                                <div className="btn-group">{/*Sedes*/}</div>
                            </div>
                            <div className="btn-group hidden-sm hidden-md hidden-lg hidden-print">
                                <div
                                    className="btn btn-default dropdown-toggle"
                                    data-toggle="dropdown"
                                    id="unalOpenMenuServicios"
                                    data-target="#services"
                                >
                                    Servicios<span className="caret"> </span>
                                </div>
                            </div>
                            <div className="btn-group hidden-sm hidden-md hidden-lg hidden-print">
                                <div
                                    className="btn btn-default dropdown-toggle"
                                    data-toggle="dropdown"
                                    id="unalOpenMenuPerfiles"
                                    data-target="#profiles"
                                >
                                    Perfiles<span className="caret"> </span>
                                </div>
                            </div>
                        </div>
                    </header>

                    <main
                        className="detalle"
                        style={{marginLeft: "50px", marginRight: "50px"}}
                    >
                        {this.props.children}
                    </main>
                </div>

                <footer
                    className="clear"
                    style={{
                        marginTop: "-20px",
                        lineHeight: "normal",
                        overflow: "hidden"
                    }}
                >
                    <nav className="col-md-3 col-lg-3 col-sm-3 col-xs-4 col-xxs-6 gobiernoLinea">
                        <a href="http://www.legal.unal.edu.co" target="_top">
                            R??gimen Legal
                        </a>
                        <a href="http://personal.unal.edu.co" target="_top">
                            Talento humano
                        </a>
                        <a href="http://contratacion.unal.edu.co" target="_top">
                            Contrataci??n
                        </a>
                        <a href="http://personal.unal.edu.co" target="_top">
                            Ofertas de empleo
                        </a>
                        <a href="http://rendiciondecuentas.unal.edu.co/" target="_top">
                            Rendici??n de cuentas
                        </a>
                        <a
                            href="http://docentes.unal.edu.co/concurso-profesoral/"
                            target="_top"
                        >
                            Concurso docente
                        </a>
                        <a href="http://www.pagovirtual.unal.edu.co/" target="_top">
                            Pago Virtual
                        </a>
                        <a href="http://controlinterno.unal.edu.co/" target="_top">
                            Control interno
                        </a>
                        <a href="http://siga.unal.edu.co" target="_top">
                            Calidad
                        </a>
                        <a
                            href="http://unal.edu.co/buzon-de-notificaciones/"
                            target="_self"
                        >
                            Buz??n de notificaciones
                        </a>
                    </nav>
                    <nav className="col-md-3 col-lg-3 col-sm-3 col-xs-4 col-xxs-6 gobiernoLinea">
                        <a href="http://correo.unal.edu.co" target="_top">
                            Correo institucional
                        </a>
                        <a href="index.html#">Mapa del sitio</a>
                        <a href="http://redessociales.unal.edu.co" target="_top">
                            Redes Sociales
                        </a>
                        <a href="index.html#">FAQ</a>
                        <a href="http://unal.edu.co/quejas-y-reclamos/" target="_self">
                            Quejas y reclamos
                        </a>
                        <a href="http://unal.edu.co/atencion-en-linea/" target="_self">
                            Atenci??n en l??nea
                        </a>
                        <a href="http://unal.edu.co/encuesta/" target="_self">
                            Encuesta
                        </a>
                        <a href="index.html#">Cont??ctenos</a>
                        <a href="http://www.onp.unal.edu.co" target="_top">
                            Estad??sticas
                        </a>
                        <a href="index.html#">Glosario</a>
                    </nav>
                    <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 col-xxs-12 footer-info">
                        <p className="col-sm-12 col-md-6 contacto">
                            <b>Contacto p??gina web:</b>
                            <br/>
                            Carrera 45 # 26-85
                            <br/>
                            Edificio Insignia Julio Garavito Armero
                            <br/> Bogot?? D.C., Colombia
                            <br/>
                            (+57 1) 316 5000 Ext. 13578
                        </p>
                        <p className="col-sm-12 col-md-6 derechos">
                            ?? Copyright 2019
                            <br/> Algunos derechos reservados.
                            <br/>
                            <a
                                title="Comun??quese con el administrador de este sitio web"
                                href="mailto:autoevalua_fibog@unal.edu.co"
                            >
                                autoevalua_fibog@unal.edu.co
                            </a>
                            <br/>
                            <a href="index.html#">Acerca de este sitio web</a>
                            <br/> ??ltima actualizaci??n: 13/02/2020
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-sm-2 col-xs-12 logos">
                        <div className="col-xs-6 col-sm-12 col-md-6 no-padding">
                            <a
                                className="col-xs-6 col-sm-12"
                                href="http://www.orgulloun.unal.edu.co"
                            >
                                <img
                                    className="hidden-print"
                                    alt="Orgullo UN"
                                    src={require("../../../images/log_orgullo.png")}
                                    width={78}
                                    height={21}
                                />
                                <img
                                    className="visible-print"
                                    alt="Orgullo UN"
                                    src={require("../../../images/log_orgullo_black.png")}
                                    width={94}
                                    height={37}
                                />
                            </a>
                            <a
                                className="col-xs-6 col-sm-12 imgAgencia"
                                href="http://www.agenciadenoticias.unal.edu.co/inicio.html"
                            >
                                <img
                                    className="hidden-print"
                                    alt="Agencia de noticias"
                                    src={require("../../../images/log_agenc.png")}
                                    width={94}
                                    height={25}
                                />
                                <img
                                    className="visible-print"
                                    alt="Agencia de noticias"
                                    src={require("../../../images/log_agenc_black.png")}
                                    width={94}
                                    height={37}
                                />
                            </a>
                        </div>
                        <div className="col-xs-6 col-sm-12 col-md-6 no-padding">
                            <a
                                className="col-xs-6 col-sm-12"
                                href="https://www.sivirtual.gov.co/memoficha-entidad/-/entidad/T0356"
                            >
                                <img
                                    alt="Tr??mites en l??nea"
                                    src={require("../../../images/log_gobiern.png")}
                                    width={67}
                                    height={51}
                                />
                            </a>
                            <a
                                className="col-xs-6 col-sm-12"
                                href="http://www.contaduria.gov.co/"
                            >
                                <img
                                    alt="Contadur??a general de la republica"
                                    src={require("../../../images/log_contra.png")}
                                    width={67}
                                    height={51}
                                />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default UnalCanvas;
