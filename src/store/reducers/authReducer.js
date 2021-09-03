import * as actionTypes from "../types/types";

const initialState = {
  responseLogin: {
    access: "",
    refresh: "",
    username: "",
    role: "",
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_AUTH_LOGIN:
      return {
        ...state,
        //Do something
      };
      break;
    case actionTypes.AUTH_LOGIN:
      return {
        ...state,
        responseLogin: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};
