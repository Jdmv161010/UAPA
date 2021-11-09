import Home from "../Components/Home/Home";
import {Login} from "../Components/Login/Login";
import StudentOutcomes from "../Components/forProfessor/Profile/Student-outcomes/Student-outcomes";

import AsideNavServices from "../layouts/AsideNav/AsideNavServices";

export const publicRoutes = [
    {path: "/", name: "Inicio", Component: Home},
    {path: "/login", name: "Iniciar sesión", Component: Login},
    {path: "/StudentAssesment", name: "Student Assesment", Component: StudentOutcomes},
    {path: "/login/subitem", name: "subitem :3", Component: AsideNavServices},
];

