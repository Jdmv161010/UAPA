import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import {
  UserOutlined,
  LockOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Modal } from "antd";
import "./Login.css";

export function Login(props) {
  const initialState = {
    username: "",
    password: "",
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleReturn = () => {
    history.push("/");
  };

  const handleLogin = (e) => {
    history.push("/profile/student");
  };

  return (
    <div>
        <div className="col">
          <div className="col title">Log in</div>
          <Button
            type="link"
            shape="circle"
            style={{
              position: "absolute",
              top: "5em",
              right: "1em",
              zIndex: 500,
            }}
            icon={
              <LeftCircleOutlined
                style={{ fontSize: "2.5em", color: "#1E3C6E" }}
              />
            }
            size="large"
            onClick={handleReturn}
          />
        </div>

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
                style={{ height: "50px" }}
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
  );
};

export default withRouter(Login);

// useEffect(() => {
//   initialState.username === "student@unaledu.co" &&
//     history.push("/profile/student");
//   initialState.username === "professor@unaledu.co" &&
//     history.push("/profile/professor");
// }, [initialState]);

// dispatch(StartAuthLogin(state.username, state.password));
// console.log(responseLogin.role);
// props.history.push("/profile");
// login(state.username, state.password).catch((error) => {
//   console.log(error);
//   Modal.error({
//     centered: true,
//     title: "Error",
//     content: "No active account found with the given credentials",
//   });
// });
