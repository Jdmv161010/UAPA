import * as actionTypes from "../types/types";

const initialState = {
  responseLogin: {
    
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
   
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
