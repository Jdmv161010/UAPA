import React, { useEffect } from "react";
import sIcon2 from "../../../assets/images/menuSt2.png";
import {Card} from "../../Utils/Card/Card"
import "./HomeworksDetail.css";
import {Upload} from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getHomeworksInfo } from "../../../store/actions/aesciActions";





export const HomeworksDetail = ({ homework }) => {
  console.log(homework)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHomeworksInfo({id:26}));
    
  }, [])
  
  const state = useSelector(state => state.aesci.HomeworksInfo)
  

  return (
    <div className="custom-container-s">
      <div className="custom-content-s">
        <span className="custom-span-s">
          {/* {homework.detail} */}
        {state?.description}
        </span>
      </div>


      <div className={"Assignments__upload"}>
        
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
        >
          <Card
            img={sIcon2}
            // title={tareainfo.nameAssignment}
            title={`Add "Nuevo"`}
            width="100%"
          />
        </Upload>
      </div>
      <a href="http://localhost:3000/aesci/profile/student/submissions"  onClick="this.href">
                        <button className="EnviarTarea-button" >                        
                            Send Assessment
                        </button>
                    </a>
    </div>
  );
};
