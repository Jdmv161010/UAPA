import * as actionTypes from "../types/types";

const initialState = {
  Homeworks:[],
  // HomeworksNew:[]
};



export const aesciReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case actionTypes.GET_HOMEWORKS:
      return {
        ...state,
        Homeworks: action.payload,
      };
      break;
    // case actionTypes.GET_HOMEWORKSINFO:
    //   return {
    //     ...state,
    //     Homeworks: action.payload
    //   };
    //   break;
    // case actionTypes.POST_HOMEWORKS:
    //   return {
    //     ...state,
    //     HomeworksNew: action.payload,
    //   };
    //   break;

    default:
      return state;
      break;
    
  }
};