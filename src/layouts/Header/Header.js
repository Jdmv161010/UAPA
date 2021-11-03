// Core
import React, {useState, useEffect} from 'react';
//Styles
import './Header.scss';
//Images - logos
import logoBg from './../../assets/images/sealBck.png';
import logoBlackUnal from './../../assets/images/escudoUnal_black.png';
import colombianShieldLogo from './../../assets/images/sealColombia.png';
//Images - Servicios
import correoIcon from './../../assets/images/icnServEmail.png';
import siaIcon from './../../assets/images/icnServSia.png';
import bibliotecasIcon from './../../assets/images/icnServLibrary.png';
import convocatoriasIcon from './../../assets/images/icnServCall.png';
import identidadIcon from './../../assets/images/icnServIdentidad.png';
//Social media
import socialMediaBg from './../../assets/images/icnSocial.png';
//icons
import locationIcon from './../../assets/images/icon-location.svg';
import iconAccesibility from './../../assets/images/access-icon.png';
import iconAccesibilityBlue from './../../assets/images/access-icon.jpg';
//Ant Design
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/actions/authActions';


function Header() {

    // const dispatch = useDispatch();
    

    // const hanleLogout = () => {
    //     dispatch( startLogout() )
    // }

    const htmlElement = document.querySelector('html');

    const languages = [
        {acronym: "EN", name: "EN - English"},
        {acronym: "ES", name: "ES - Español"},
    ]
    const [language, setLanguage] = useState(languages[0]);
    const [menuMobileDisplay, setMenuMobileDisplay] = useState(false);

    //Accessibility
    const [accessibilityPanelDisplay, setAccessibilityPanelDisplay] = useState(false);
    const [fontSize, setFontSize] = useState(0);
    const [colorInvert, setColorInvert] = useState(false);
    const [theme, setTheme] = useState(0);

    const languageElements = languages.map((language, i) =>
        (<li key={i} className="Header-dropdown__item">
            <button onClick={() => setLanguage(language)} className="Header-dropdown__link">{language.name}</button>
        </li>)
    );

    const toggleMenuMobile = () => {
        setMenuMobileDisplay(!menuMobileDisplay);
    };

    const toggleAccessibilityPanel = () => {
        setAccessibilityPanelDisplay(!accessibilityPanelDisplay);
    }


    //Accessibility options
    const setHtmlFontSize = (newFontSize) => {
        if (newFontSize >= 0 && newFontSize <= 10) {
            htmlElement.classList.remove(`font-size--${fontSize}`);
            htmlElement.classList.add(`font-size--${newFontSize}`);
            setFontSize(newFontSize);
            localStorage.setItem('fontSize', newFontSize);
        }
    }

    const setHtmlColorInvert = (newColor) => {
        setColorInvert(newColor);
        newColor ? htmlElement.classList.add('colors--invert') : htmlElement.classList.remove('colors--invert');
        localStorage.setItem('colorInvert', newColor);
    }

    const setHtmlTheme = (newTheme) => {
        htmlElement.classList.remove(`theme--${theme}`);
        htmlElement.classList.add(`theme--${newTheme}`);
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    const restartSettings = () => {
        htmlElement.className = '';
        setHtmlTheme(0);
        setHtmlFontSize(0);
        setHtmlColorInvert(false);
    }

    const setSavedSettings = () => {
        const savedTheme = localStorage.getItem('theme');
        const savedFontSize = localStorage.getItem('fontSize');
        const savedColorInvert = localStorage.getItem('colorInvert');
        if (savedTheme) setHtmlTheme(JSON.parse(savedTheme));
        if (savedFontSize) setHtmlFontSize(JSON.parse(savedFontSize));
        if (savedColorInvert) setHtmlColorInvert(JSON.parse(savedColorInvert));
    }

    //Dropdown
    const toggleDropdown = (event) => {
        const itemlistELement = event.target.nextSibling;
        const targetClass = itemlistELement.classList[0];
        itemlistELement.classList.toggle(`${targetClass}--show`);
    }


    useEffect(() => {
        //Set accessibility's settings from localstorage
        setSavedSettings();

        //TO close an opened dropdown when the user clicks outside the dropdown
        const checkIfClickedOutside = e => {
            const dropdownOpened = document.querySelector('.Header-dropdown__list--show');
            if (dropdownOpened) dropdownOpened.classList.remove('Header-dropdown__list--show');
        }
        document.addEventListener("mouseup", checkIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mouseup", checkIfClickedOutside)
        }
    })


    return (
        <header className={"Header"}>
            <a href="https://unal.edu.co" className="Header-logo">
                <img src={logoBg} alt="" className="Header-logo__decor"/>
                <img src={require('./../../assets/images/escudoUnal.svg')} className="Header-logo__img"
                     alt="Escudo de la Universidad Nacional de Colombia"/>
                <img src={logoBlackUnal} className="Header-logo__img print--onlyOnPrint"
                     alt="Escudo de la Universidad Nacional de Colombia"/>
            </a>

            {/* Nav mobile - starts*/}
            <nav className={"Header-navMobile"}>
                <button className="Header-navMobile__accessibilityToggleBtn" onClick={() => toggleAccessibilityPanel()}>
                    <img className={"Header-navMobile__accessibilityToggleBtn-icon"} src={iconAccesibility} alt=""/>
                </button>
                <img src={colombianShieldLogo} alt="Escudo de la República de Colombia" className="Header-navMobile__img print--notPrintable"/>
                <button className="Header-navMobile__menuToggleBtn" onClick={() => toggleMenuMobile()}>
                    <span className="Header-navMobile__menuToggleBtn-icon"/>
                </button>
                <div className={"Header-dropdown Header-dropdown--languages print--notPrintable"}>
                    <button className="Header-dropdown__button"
                            onClick={(e) => toggleDropdown(e)}> {language.acronym} </button>
                    <ul className="Header-dropdown__list">
                        {languageElements}
                    </ul>
                </div>
            </nav>
            {/* Nav mobile - ends*/}


            {/* Nav Desktop - starts*/}
            <nav className={"Header-navDesktop"}>
                <div className="Header-navDesktop__wrapper-secondaryNav">
                    <ul className="Header-navDesktop-profiles">
                        <li className="Header-navDesktop-profiles__item"><a href="http://aspirantes.unal.edu.co"
                                                                            className="Header-navDesktop-profiles__link">Aspirantes</a>
                        </li>
                        <li className="Header-navDesktop-profiles__item"><a href="http://estudiantes.unal.edu.co"
                                                                            className="Header-navDesktop-profiles__link">Estudiantes</a>
                        </li>
                        <li className="Header-navDesktop-profiles__item"><a href="http://egresados.unal.edu.co"
                                                                            className="Header-navDesktop-profiles__link">Egresados</a>
                        </li>
                        <li className="Header-navDesktop-profiles__item"><a href="http://docentes.unal.edu.co"
                                                                            className="Header-navDesktop-profiles__link">Docentes</a>
                        </li>
                        <li className="Header-navDesktop-profiles__item"><a href="http://administrativos.unal.edu.co"
                                                                            className="Header-navDesktop-profiles__link">Administrativos</a>
                        </li>
                    </ul>
                    <ul className="Header-navDesktop-socialMedia">
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <li className="Header-navDesktop-socialMedia__item"><a
                            href="https://www.facebook.com/UNALOficial"
                            style={{backgroundImage: `url(${socialMediaBg})`}}
                            className="Header-navDesktop-socialMedia__link"/>
                        </li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <li className="Header-navDesktop-socialMedia__item"><a href="https://twitter.com/UNALOficial"
                                                                               style={{backgroundImage: `url(${socialMediaBg})`}}
                                                                               className="Header-navDesktop-socialMedia__link"/>
                        </li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <li className="Header-navDesktop-socialMedia__item"><a
                            href="https://www.youtube.com/channel/UCnE6Zj2llVxcvL5I38B0Ceg"
                            style={{backgroundImage: `url(${socialMediaBg})`}}
                            className="Header-navDesktop-socialMedia__link"/>
                        </li>
                    </ul>
                    <div className={"Header-dropdown Header-dropdown--languages print--notPrintable"}>
                        <button className="Header-dropdown__button"
                                onClick={(e) => toggleDropdown(e)}> {language.acronym} </button>
                        <ul className="Header-dropdown__list">
                            {languageElements}
                        </ul>
                    </div>
                </div>
                <div className="Header-navDesktop__wrapper-mainNav">
                    <div className="Header-navDesktop__title-wrapper">
                        <span className="Header-navDesktop__title-icon"><img src={locationIcon} alt=""/></span>
                        <h1 className="Header-navDesktop__title">ingenieria.bogota.unal.edu.co/AESCI</h1>
                    </div>
                    <ul className="Header-navDesktop-menu">
                        <li className="Header-dropdown">
                            <Button type="link" href="/" style={{color: "white"}}>Home</Button>
                        </li>
                        <li className="Header-dropdown">
                            <Button type="link" href="mailto:autoevalua_fibog@unal.edu.co" style={{color: "white"}}>Contact us</Button>
                        </li>
                        <li className="Header-dropdown">
                            <Button type="link" href="https://ingenieria.bogota.unal.edu.co/es/dependencias/vicedecanatura-academica/autoevaluacion-y-acreditacion.html" style={{color: "white"}}>Who we are</Button>
                        </li>
                        {/* <li className="Header-dropdown">
                        <button 
                            className="btn"
                            onClick={hanleLogout}
                        >
                            Logout
                        </button>
                        </li> */}
                    </ul>
                    <div className="Header-dropdown">
                        <button className="Header-dropdown__button"
                                onClick={(e) => toggleDropdown(e)}>SEDES
                        </button>
                        <ul className="Header-dropdown__list">
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://amazonia.unal.edu.co"
                                                                     className="Header-dropdown__link">Amazonia</a></li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://bogota.unal.edu.co"
                                                                     className="Header-dropdown__link">Bogotá</a></li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://caribe.unal.edu.co"
                                                                     className="Header-dropdown__link">Caribe</a></li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://delapaz.unal.edu.co"
                                                                     className="Header-dropdown__link">De La Paz</a>
                            </li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://www.manizales.unal.edu.co"
                                                                     className="Header-dropdown__link">Manizales</a>
                            </li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://medellin.unal.edu.co"
                                                                     className="Header-dropdown__link">Medellín</a></li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://orinoquia.unal.edu.co"
                                                                     className="Header-dropdown__link">Orinoquia</a>
                            </li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://www.palmira.unal.edu.co"
                                                                     className="Header-dropdown__link">Palmira</a></li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://tumaco-pacifico.unal.edu.co"
                                                                     className="Header-dropdown__link">Tumaco</a></li>
                        </ul>
                    </div>

                    <img src={colombianShieldLogo} alt="Escudo de la República de Colombia" className="Header-navDesktop__img print--notPrintable"/>
                </div>

                <button
                    className={`Header-navDesktop-accessibilityToggleBtn Header-navDesktop-accessibilityToggleBtn--${accessibilityPanelDisplay ? 'show' : 'hidden'}`}
                    onClick={() => toggleAccessibilityPanel()}>
                    <img className={"Header-navDesktop-accessibilityToggleBtn__icon"} src={iconAccesibilityBlue}
                         alt=""/>
                    <span className={"Header-navDesktop-accessibilityToggleBtn__title"}>Panel de accesibilidad</span>
                </button>

            </nav>
            {/* Nav Desktop - ends*/}

            {/* Menu burguer - starts*/}
            <ul className={`Header-menuBurguer Header-menuBurguer--${menuMobileDisplay ? 'show' : 'hidden'}`}>
                <li className="Header-menuBurguer__item">
                    <a href="/" className="Header-menuBurguer__link">Home</a>
                </li>
                <li className="Header-menuBurguer__item">
                    <a href="mailto:autoevalua_fibog@unal.edu.co" className="Header-menuBurguer__link">Contact us</a>
                </li>
                <li className="Header-menuBurguer__item">
                    <a href="https://ingenieria.bogota.unal.edu.co/es/dependencias/vicedecanatura-academica/autoevaluacion-y-acreditacion.html" className="Header-menuBurguer__link">Who we are</a>
                </li>
                <li className="Header-menuBurguer__item Header-dropdown">
                    <button className="Header-dropdown__button"
                            onClick={(e) => toggleDropdown(e)}>SEDES
                    </button>
                    <ul className="Header-dropdown__list">
                        <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                 href="http://amazonia.unal.edu.co"
                                                                 className="Header-dropdown__link">Amazonia</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                 href="http://bogota.unal.edu.co"
                                                                 className="Header-dropdown__link">Bogotá</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                 href="http://caribe.unal.edu.co"
                                                                 className="Header-dropdown__link">Caribe</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                 href="http://delapaz.unal.edu.co"
                                                                 className="Header-dropdown__link">De La Paz</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                 href="http://www.manizales.unal.edu.co"
                                                                 className="Header-dropdown__link">Manizales</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                 href="http://medellin.unal.edu.co"
                                                                 className="Header-dropdown__link">Medellín</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                 href="http://orinoquia.unal.edu.co"
                                                                 className="Header-dropdown__link">Orinoquia</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                 href="http://www.palmira.unal.edu.co"
                                                                 className="Header-dropdown__link">Palmira</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                 href="http://tumaco-pacifico.unal.edu.co"
                                                                 className="Header-dropdown__link">Tumaco</a></li>
                    </ul>
                </li>
                <li className="Header-menuBurguer__item Header-dropdown">
                    <button className="Header-dropdown__button"
                            onClick={(e) => toggleDropdown(e)}>PERFILES
                    </button>
                    <ul className="Header-dropdown__list">
                        <li className="Header-dropdown__item"><a target="_blank" href="http://aspirantes.unal.edu.co"
                                                                 rel="noreferrer"
                                                                 className="Header-dropdown__link">Aspirantes</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" href="http://estudiantes.unal.edu.co"
                                                                 rel="noreferrer"
                                                                 className="Header-dropdown__link">Estudiantes</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" href="http://egresados.unal.edu.co"
                                                                 rel="noreferrer"
                                                                 className="Header-dropdown__link">Egresados</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" href="http://docentes.unal.edu.co"
                                                                 rel="noreferrer"
                                                                 className="Header-dropdown__link">Docentes</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                 href="http://administrativos.unal.edu.co"
                                                                 className="Header-dropdown__link">Administrativos</a>
                        </li>
                    </ul>
                </li>
                <li className="Header-menuBurguer__item Header-dropdown">
                    <button className="Header-dropdown__button"
                            onClick={(e) => toggleDropdown(e)}>SERVICIOS
                    </button>
                    <ul className="Header-dropdown__list">
                        <li className="Header-dropdown__item"><a target="_blank" href="/"
                                                                 className="Header-dropdown__link">

                            <img src={correoIcon}
                                 alt=""
                                 width="32"
                                 height="32" className="Header-dropdown__icon"/>
                            Correo Electrónico

                        </a></li>
                        <li className="Header-dropdown__item"><a target="_blank" href="/"
                                                                 className="Header-dropdown__link">

                            <img src={siaIcon}
                                 width="32"
                                 height="32"
                                 alt="Dirección Nacional de Información Académica" className="Header-dropdown__icon"/>
                            DNINFOA - SIA

                        </a></li>
                        <li className="Header-dropdown__item"><a target="_blank" href="/"
                                                                 className="Header-dropdown__link">

                            <img src={bibliotecasIcon}
                                 width="32" height="32"
                                 alt="Biblioteca" className="Header-dropdown__icon"/>
                            Bibliotecas

                        </a></li>
                        <li className="Header-dropdown__item"><a target="_blank" href="/"
                                                                 className="Header-dropdown__link">

                            <img src={convocatoriasIcon}
                                 width="32" height="32"
                                 alt="Convocatorias" className="Header-dropdown__icon"/>
                            Convocatorias

                        </a></li>
                        <li className="Header-dropdown__item"><a target="_blank" href="/"
                                                                 className="Header-dropdown__link">

                            <img src={identidadIcon}
                                 width="32"
                                 height="32"
                                 alt="Identidad UNAL" className="Header-dropdown__icon"/>
                            Identidad UNAL

                        </a></li>
                    </ul>
                </li>
            </ul>


            <div
                className={`Header-accessibilityPanel Header-accessibilityPanel--${accessibilityPanelDisplay ? 'show' : 'hidden'}`}>
                <div className="Header-accessibilityPanel__item">
                    <h4 className="Header-accessibilityPanel__title">Tamaño letra</h4>
                    <button className="Header-accessibilityPanel__button"
                            onClick={() => setHtmlFontSize(fontSize - 1)}>A<sup>-</sup></button>
                    <button className="Header-accessibilityPanel__button"
                            onClick={() => setHtmlFontSize(fontSize + 1)}>A<sup>+</sup></button>
                    <label className="Header-accessibilityPanel__label">{100 + fontSize * 5}%</label>
                </div>
                <div className="Header-accessibilityPanel__item">
                    <h4 className="Header-accessibilityPanel__title">Cambiar Contrastes</h4>
                    <button className="Header-accessibilityPanel__button" onClick={() => setHtmlTheme(1)}>1</button>
                    <button className="Header-accessibilityPanel__button" onClick={() => setHtmlTheme(2)}>2</button>
                    <button className="Header-accessibilityPanel__button" onClick={() => setHtmlTheme(3)}>3</button>
                </div>
                <div className="Header-accessibilityPanel__item">
                    <h4 className="Header-accessibilityPanel__title">Invertir colores</h4>
                    <button className="Header-accessibilityPanel__button"
                            onClick={() => setHtmlColorInvert(!colorInvert)}>Aplicar
                    </button>
                </div>
                <div className="Header-accessibilityPanel__item">
                    <h4 className="Header-accessibilityPanel__title">Restablecer ajustes</h4>
                    <button className="Header-accessibilityPanel__button" onClick={() => restartSettings()}>Aplicar
                    </button>
                </div>
            </div>


        </header>
    );
}

export default Header;
