import Axios from "axios";
import { useHistory } from "react-router-dom";
import * as actionTypes from "../types/types";

const UrlBase = "http://localhost:8000";

const getHomeworks = (data) => ({
    type: actionTypes.GET_HOMEWORKS,
    payload: data,
});

export const getHomeworksData = (username) => {
    console.log(username)
    return async (dispatch) => {
        try {
            const respt = await Axios.get(`${UrlBase}/assignments?username=Jose/`,
                {
                    
                    username:"Jose",
                    
                }
            );
            console.log(respt)
            //    dispatch(getHomeworks(data));
        } catch (error) {
            console.log(error);
        }
    };
};
