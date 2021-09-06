import React from "react";
import ReactDOM from "react-dom";
import UnalCanvas from "./Components/UnalTemplate/UnalCanvas";
import Home from "./Components/Home/Home";
import Test from "./Components/Test/Test";
import Login from "./Components/Login/Login";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./assets/css/index.css";
import { isLogged } from "./Auth.js";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Profile } from "./Components/Profile/Profile";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLogged() ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isLogged() ? <Component {...props} /> : <Redirect to="/home" />
    }
  />
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={"/aesci"}>
        <Switch>
          <PrivateRoute exact path="/home" component={Test} />
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute exact path="/login" component={Login} />
          <Route
            exact
            path="/profile/student"
            render={(props) => <Profile {...props} role="student" />}
          />
          <Route
            exact
            path="/profile/student"
            render={(props) => <Profile {...props} role="student" />}
          />
          <Route
            exact
            path="/profile/professor"
            render={(props) => <Profile {...props} role="professor" />}
          />
        </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
