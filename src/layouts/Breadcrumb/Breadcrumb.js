// Core
import React from 'react';
import {Link, useLocation} from "react-router-dom";
//Styles
import './Breadcrumb.scss';
import {publicRoutes} from "../../router/routes";


export default function Breadcrumb(props) {
    const location = useLocation();
    const crumbs = publicRoutes.filter(({path}) => location.pathname.includes(path));

    if (crumbs.length <= 1) return null;
    return (
        <div className={"Breadcrumb"}> Está en:&nbsp;
            {crumbs.map(({name, path}, key) =>
                key + 1 === crumbs.length ?
                    (<span className={"Breadcrumb__item"} key={key}>{name}</span>) :
                    (<Link className={"Breadcrumb__link"}  key={key} to={path}>{name}</Link>)
                    


            )}
        </div>
    );
};
