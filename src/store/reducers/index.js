import { combineReducers } from "redux";
import { aesciReducer } from "./aesciReducer";
import { authReducer } from "./authReducer";


export const rootReducer = combineReducers({
  auth: authReducer,
  aesci: aesciReducer,
});
