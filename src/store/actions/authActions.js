import Axios from "axios";
import { useHistory } from "react-router-dom";
import * as actionTypes from "../types/types";

const UrlBase = "https://611dabd97d273a0017e2f88c.mockapi.io/login";

const AuthLogin = (data) => ({
  type: actionTypes.AUTH_LOGIN,
  payload: data,
});

export const StartAuthLogin = (username, password) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.post(`${UrlBase}/Login`, {
        username,
        password,
      });
      dispatch(AuthLogin(data));
    } catch (error) {
      console.log(error);
    }
  };
};
