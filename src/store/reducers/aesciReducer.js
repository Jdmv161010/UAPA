import * as actionTypes from "../types/types";

const initialState = {
  Homeworks:{
    
  }
};

export const aesciReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case actionTypes.GET_HOMEWORKS:
      return {
        ...state,
        Homeworks: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};