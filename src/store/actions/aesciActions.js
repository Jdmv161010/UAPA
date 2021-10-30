import Axios from "axios";
import { useHistory } from "react-router-dom";
import { isJSDocSeeTag } from "typescript";
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

// const getHomeworksInfo = (data) => ({
//     type: actionTypes.GET_HOMEWORKSINFO,
//     payload: data,
// });

// export const getHomeworksInfo = (id) => {
//     console.log(id)
//     return async (dispatch) => {
//         try {
//             const respt = await Axios.get(`${UrlBase}/assignmentstudents`,
//                 {
                    
                    
//                 }
//             );
//             const {data} = respt
            
//             console.log(data)
//             dispatch();
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };

// const NewTarea = (data) => ({
//     type: actionTypes.POST_HOMEWORKS,
//     payload: data,
//   });
  
//   export const StartNewtarea = (nameAssignment, description, username, numGroup) => {
    
//     console.log(nameAssignment, description, username, numGroup)
//     return async (dispatch) => {
//       try {
//         const { data } = await Axios.post(`${UrlBase}/assignments/`, {
//           nameAssignment,
//           description, 
//           username, 
//           numGroup
          
//         });
         
//          dispatch(NewTarea(data));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   };