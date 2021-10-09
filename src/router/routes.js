import Home from "../Components/Home/Home";
import {Login} from "../Components/Login/Login";
import { Homeworks } from "../Components/forStudent/Homeworks/Homeworks";
import AsideNavServices from "../layouts/AsideNav/AsideNavServices";

export const publicRoutes = [
    {path: "/", name: "Inicio", Component: Home},
    {path: "/login", name: "Iniciar sesión", Component: Login},
    // {path: "/login/subitem", name: "subitem :3", Component: AsideNavServices},
    {path: "/Homeworks", name:"Homeworks", Component: Homeworks },
];

