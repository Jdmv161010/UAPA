import * as actionTypes from "../types/types";

const initialState = {
  Homeworks:[],
  HomeworksInfo:[],
  HomeworksNew:[],
  Courses:[],
  Indicators:[]
};

export const aesciReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case actionTypes.GET_HOMEWORKS:
      return {
        ...state,
        Homeworks: action.payload,
      };
    case actionTypes.GET_HOMEWORKSINFO:
      return {
        ...state,
        HomeworksInfo: action.payload
      };
    case actionTypes.POST_HOMEWORKS:
      return {
        ...state,
        HomeworksNew: action.payload,
      };
    case actionTypes.GET_COURSES:
      return {
        ...state,
        Courses: action.payload,
      }; 
    case actionTypes.GET_INDICATORS:
      return {
        ...state,
        Indicators: action.payload,
      };   
      break;

    default:
      return state;
      break;
    
  }
};