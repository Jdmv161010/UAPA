import React from "react";
import {withRouter} from "react-router-dom";
import '../Home/Home.css';
import './Test.css';
import {verify} from "../../Auth.js"

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            selected: 1
        };
        verify();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col element title">
                        Academic Evaluation System for Continuous Improvement
                    </div>
                </div>
                <div className="row test-content" style={{height: "10em"}}>
                    GROUPS: {sessionStorage.getItem("groups")}
                </div>
                <div className="row test-content" style={{height: "20em"}}>
                    PERMISSIONS: {sessionStorage.getItem("permissions")}
                </div>
            </div>
        );
    }
}

export default withRouter(Test);