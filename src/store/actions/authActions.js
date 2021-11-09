import Axios from "axios";
import { clearAuthTokens, getAccessToken, isLoggedIn } from "axios-jwt";
import { useHistory } from "react-router-dom";
import Home from "../../Components/Home/Home";
import * as actionTypes from "../types/types";

const UrlBase = "http://localhost:8000";
const verifyEndpoint = UrlBase + "verify/";

const AuthLogin = (data) => ({
  type: actionTypes.AUTH_LOGIN,
  payload: data,
});

export const StartAuthLogin = (username, password) => {
  
  return async (dispatch) => {
    try {
      const { data } = await Axios.post(`${UrlBase}/login/`, {
        username,
        password,
      });
       
       dispatch(AuthLogin(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  clearAuthTokens();
  window.location.reload();
};

export const isLogged = () => {
  return isLoggedIn();
};



export const verify = () => {
  return new Promise((resolve, reject) => {
      Axios.post(
          verifyEndpoint,
          {
              "token": getAccessToken()
          }
      ).catch(() => {
          logout();
          window.location.reload();
      })
  });
};
