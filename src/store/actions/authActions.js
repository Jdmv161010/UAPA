import Axios from "axios";
import { useHistory } from "react-router-dom";
import * as actionTypes from "../types/types";

const UrlBase = "http://localhost:8000";

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
