import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import {UserOutlined, LockOutlined, LeftCircleOutlined} from '@ant-design/icons';
import {Form, Input, Button, Modal} from "antd";
//import {withRouter} from "react-router-dom";
import {MainContainer} from "./../Home/HomeStyled";
import {LoginButton} from "./LoginStyled";
import './Login.css';
import {login} from "./../../../Auth.js"
import { useHistory } from "react-router-dom";


export default function useLogin(){
    const [properties, setProperties] = useState({
        username: "-",
        password: "--",
        selected: 0,
        title: "",
        image: ""
    })
    const history = useHistory()

    let handleReturn = () => {
        if (properties.selected === 0) {
            history.push("/home")
        } else {
            setProperties({selected: 0})
        }
    };

    let onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    let handleClickLogin = e => {
        login(properties.username, properties.password)
            .catch(error => {
                console.log(error);
                Modal.error({
                    centered: true,
                    title: 'Error',
                    content: 'No active account found with the given credentials',
                });
            });
    };

    return(
        <div>
                <MainContainer>
                    <div className="col">
                        <div className="col title">
                            Log in
                        </div>
                        <Button
                            type="link"
                            shape="circle"
                            style={{position: "absolute", top: "5em", right: "1em", zIndex: 500}}
                            icon={<LeftCircleOutlined style={{fontSize: '2.5em', color: "#1E3C6E"}}/>}
                            size="large"
                            onClick={handleReturn}
                        />
                    </div>
                    {properties.selected === 0 &&
                    <div className="col">
                        <div className="row">
                            <div className="subtitle">
                                Welcome, please select your role to continue
                            </div>
                        </div>
                        <div className="row">
                            <div className="col trim">
                                <div className="content" onClick={() => setProperties({
                                    selected: 1,
                                    title: "Student",
                                    image: require("../../../images/studentIcon.svg")
                                })}>
                                    <img
                                        src={require("../../../images/studentIcon.svg")}
                                        width={170}
                                        height={170}
                                        style={{margin: "0 0.5em"}}
                                        alt="Student"
                                    />
                                    Student
                                </div>
                            </div>
                            <div className="col trim">
                                <div className="row content" onClick={() => setProperties({
                                    selected: 2,
                                    title: "Professor",
                                    image: require("../../../images/professorIcon.png")
                                })}>
                                    <img
                                        src={require("../../../images/professorIcon.png")}
                                        width={170}
                                        height={170}
                                        style={{margin: "0 0.5em"}}
                                        alt="Professor"
                                    />
                                    Professor
                                </div>
                            </div>
                            <div className="col trim">
                                <div className="row content" onClick={() => setProperties({
                                    selected: 3,
                                    title: "Peer Reviewer",
                                    image: require("../../../images/reviewerIcon.svg")
                                })}>
                                    <img
                                        src={require("../../../images/reviewerIcon.svg")}
                                        width={170}
                                        height={170}
                                        style={{margin: "0 0.5em"}}
                                        alt="Peer Reviewer"
                                    />
                                    Peer Reviewer
                                </div>
                            </div>
                        </div>
                        <div className="row footer">
                            Log in as administrator
                        </div>
                    </div>}

                    {properties.selected !== 0 &&
                    <div className="col">

                        <div className="row" style={{marginTop: "2em", justifyContent: "center"}}>

                            <div className="col-3 trim"
                                 style={{display: "flex"}}
                            >
                                <img
                                    src={properties.image}
                                    width={250}
                                    height={250}
                                    style={{margin: "auto"}}
                                    alt="profile"
                                />
                            </div>
                            <div className="col-5 trim">
                                <div className="row login-form-header">
                                    {properties.title}
                                </div>
                                <Form
                                    className="row login-form-container"
                                    onFinishFailed={onFinishFailed}
                                >
                                    Log in using your institutional information
                                    <Form.Item
                                        name="username"
                                        rules={[{required: true, message: 'Please input your username!'}]}
                                        style={{width: "100%"}}
                                    >
                                        <Input size="large"
                                               placeholder="Username"
                                               style={{borderRadius: "7px", marginTop: "0.5em"}}
                                               prefix={<UserOutlined/>}
                                               onChange={ e => {setProperties({username: e.target.value})}}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[{required: true, message: 'Please input your password!'}]}
                                        style={{width: "100%"}}
                                    >
                                        <Input.Password
                                            size="large"
                                            placeholder="Password"
                                            style={{borderRadius: "7px"}}
                                            prefix={<LockOutlined/>}
                                            onChange={ e => {setProperties({password: e.target.value})}}
                                        />
                                    </Form.Item>
                                    <div style={{margin: "0 auto"}}>
                                        <Form.Item>
                                            <LoginButton htmlType="submit" className="login-form-button"
                                                         onClick={handleClickLogin}>
                                                Log in
                                            </LoginButton>
                                        </Form.Item>
                                    </div>
                                </Form>

                            </div>
                        </div>
                    </div>
                    }
                </MainContainer>
            </div>
    );
}