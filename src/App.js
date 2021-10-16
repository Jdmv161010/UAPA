import React from "react";
import { Switch, Route } from "react-router-dom";
import BreadCrumb from "./layouts/Breadcrumbper/Breadcrumb";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { StudentProfile } from "./Components/forStudent/Profile/Profile";
import { Homeworks } from "./Components/forStudent/Homeworks/Homeworks";




function App() {
  return (
    <div className="App">
      
      <BreadCrumb />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        
        
        
      </Switch>
    </div>
  );
}

export default App;
