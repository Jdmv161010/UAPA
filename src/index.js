import React from "react";
import ReactDOM from "react-dom";
import UnalCanvas from "./js/Components/UnalTemplate/UnalCanvas";
import Home from "./js/Components/Home/Home";
import Test from "./js/Components/Test/Test";
import Login from "./js/Components/Login/Login";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./css/index.css";
import { isLogged } from "./Auth.js";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Profile } from "./js/Components/Profile/Profile";

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
      <UnalCanvas>
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
      </UnalCanvas>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
