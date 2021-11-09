import Axios from "axios";
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
            const respt = await Axios.get(`${UrlBase}/assignmentstudents`,
                {
                    
                    params:{
                        username: username,
                        }
                }
            );
            const {data} = respt
            
            console.log(data)
            dispatch(getHomeworks(data));
        } catch (error) {
            console.log(error);
        }
    };
};


const getHomeworksI = (data) => ({
  type: actionTypes.GET_HOMEWORKSINFO,
  payload: data,
});

export const getHomeworksInfo = (dataHomeworksInfo) => {
    console.log(dataHomeworksInfo)
    return async (dispatch, getState) => {
        try {
            const {access, username}= getState().auth.responseLogin
            console.log(access)
            const config = {
              headers: { Authorization: `Bearer ${access}`,"Content-Type":"application/json","Accept":"*/*" }
            };
            const respt = await Axios.get(`${UrlBase}/assignments/${dataHomeworksInfo.id}/?username`,
            config,    
            // {
            //       params:{
            //            username: username, 
            //         }
                  
            //     }
              
            );
            const {data} = respt
            
            console.log(data)
            dispatch(getHomeworksI(data));
        } catch (error) {
            console.log(error);
        }
    };
};

const NewTarea = (data) => ({
    type: actionTypes.POST_HOMEWORKS,
    payload: data,
  });
  
  export const StartNewtarea = (dataTarea) => {
    const {nameAssignment, description, numGroup} = dataTarea
    
    return async (dispatch, getState) => {
      try {
        const {access, username}= getState().auth.responseLogin
          console.log(access)
          const config = {
            headers: { Authorization: `Bearer ${access}`,"Content-Type":"application/json","Accept":"*/*" }
          };
        const { data } = await Axios.post(`${UrlBase}/assignments/`, {
          nameAssignment,
          description, 
          username:"dfzunigah", 
          numGroup:Number(numGroup)
          
        } ,config
        );
         console.log(data)
        //  dispatch(NewTarea(data));
      } catch (error) {
        console.log(error);
      }
    };
  };

  const getCourses = (data) => ({
    type: actionTypes.GET_COURSES,
    payload: data,
});

export const getCoursesData = () => {
   
    return async (dispatch, getState) => {
        try {
          const {access}= getState().auth.responseLogin
          console.log(access)
          const config = {
            headers: { Authorization: `Bearer ${access}` }
          };
          const respt = await Axios.get(`${UrlBase}/courses`,
                
                config
            );
            const {data} = respt
            
            console.log(data)
            dispatch(getCourses(data));
        } catch (error) {
            console.log(error);
        }
    };
};

const getIndicators = (data) => ({
  type: actionTypes.GET_INDICATORS,
  payload: data,
});

export const getIndicatorsData = () => {
 
  return async (dispatch, getState) => {
      try {
        const respt = await Axios.get(`${UrlBase}/indicatorassignments`,
              
              
          );
          const {data} = respt
          
          console.log(data)
          dispatch(getIndicators(data));
      } catch (error) {
          console.log(error);
      }
  };
};
