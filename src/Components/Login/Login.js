import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import {
  UserOutlined,
  LockOutlined,
  
} from "@ant-design/icons";
import { Form, Input} from "antd";
import "./Login.css";
import { StartAuthLogin } from "../../store/actions/authActions";
import { useSelector } from "react-redux";



export function Login(props) {
  const initialState = {
    username: "",
    password: "",
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const {access, role} = useSelector(state => state.auth.responseLogin)
  const [state, setState] = useState(initialState);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const handleReturn = () => {
  //   history.push("/");
  // };

  const handleLogin = (e) => {
    dispatch(StartAuthLogin(state.username, state.password))
    if(access){
      if(role==="Admin"){  /*Cambiar por Professor */
        history.push("/profile/professor");
      }else if (role==="Student"){
        history.push("/profile/student");
      }else{
        //Aquí va el perfil del administrador
      }

  }
};
  


  return (
    
    
    <div className="cont"> 
      
      
      <div className="col">
        <div className="col titleLogin">Log in</div>
      </div>

      <div className="cont2">
        
        <div className="col">
          <div
            className="row"
            style={{
              marginTop: "2em",
              justifyContent: "center",
            }}
          >
            <div className="col-5 trim">
              <div
                className="row login-form-header"
              />
              <Form
                className="row login-form-container"
                onFinishFailed={onFinishFailed}
              >
                Log in using your institutional information
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                  style={{ width: "100%" }}
                >
                  <Input
                    size="large"
                    placeholder="Username"
                    style={{ borderRadius: "7px", marginTop: "0.5em" }}
                    prefix={<UserOutlined />}
                    onChange={(e) => {
                      setState({ ...state, username: e.target.value });
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  style={{ width: "100%" }}
                >
                  <Input.Password
                    size="large"
                    placeholder="Password"
                    style={{ borderRadius: "7px" }}
                    prefix={<LockOutlined />}
                    onChange={(e) => {
                      setState({ ...state, password: e.target.value });
                    }}
                  />
                </Form.Item>
                <div style={{ margin: "0 auto" }}>
                  <Form.Item>
                    <button
                      htmlType="submit"
                      className="login-form-button"
                      onClick={handleLogin}
                    >
                      Log in
                    </button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
      
        </div>
      </div>                
    </div>
  );
};

export default withRouter(Login);

