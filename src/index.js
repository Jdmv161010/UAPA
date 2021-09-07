// Core
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
//Redux
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import {store} from "./store/store";
// Components
import Test from "./Components/Test/Test";
//Auth - NOTE: someday this will be part of redux
import {Profile} from "./Components/Profile/Profile";
import {isLogged} from "./Auth.js";
//Layouts
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import AsideNavServices from "./layouts/AsideNav/AsideNavServices";
import Breadcrumb from "./layouts/Breadcrumb/Breadcrumb";
//Routes
import {publicRoutes} from "./router/routes";
//Styles
import './styles/styles.scss';


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={(props) =>
            isLogged() ? <Component {...props} /> : <Redirect to="/"/>
        }
    />
);

const PublicRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={(props) =>
            !isLogged() ? <Component {...props} /> : <Redirect to="/home"/>
        }
    />
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={"/aesci"}>
            <div className="App">
                <Header/>
                <AsideNavServices/>
                <main>
                    <Breadcrumb/>
                    <Switch>
                        {publicRoutes.map(({path, Component}, i) => (
                            <PublicRoute exact path={path} key={i} component={Component}/>
                        ))}
                        {/*<PrivateRoute exact path="/home" component={Test}/>*/}
                        <Route
                            exact
                            path="/profile/student"
                            render={(props) => <Profile {...props} role="student"/>}
                        />
                        <Route
                            exact
                            path="/profile/professor"
                            render={(props) => <Profile {...props} role="professor"/>}
                        />
                    </Switch>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
