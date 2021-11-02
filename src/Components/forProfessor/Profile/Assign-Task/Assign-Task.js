import React, { useEffect, useState } from "react";
import "./Assign-Task.css";
import Select from 'react-select';
import { getCoursesData, getIndicatorsData, StartNewtarea } from "../../../../store/actions/aesciActions";
import { useDispatch, useSelector} from "react-redux";
import { Form, Input} from "antd";

export default function AssignTask() {

    const initialState = {
        nameAssignment:"",
        description:"",
        numGroup:"",
      };

    const dispatch = useDispatch();
    const [state, setState] = useState(initialState);
    const {Courses} = useSelector(state => state.aesci);
    const {Indicators} = useSelector(state => state.aesci);    
    

    useEffect(() => {
        dispatch(getCoursesData());
        dispatch(getIndicatorsData())
    }, [])

    const handleHomework = (e) => {
    dispatch(StartNewtarea(state))
    console.log(state)  

      
      
      
      };

 

    return (
        
        <div className="contAssign">
            
            <div className="col element title">
            Assign Task To Students
            </div>
            
                
                <div className="contAssign2">
                <Form>
                <Form.Item
                    name="course"
                    rules={[
                      {
                        required: true,
                        
                      },
                    ]}
                >
                
                    <div className="contAssign3">
                        <div className="contAssignTitulo">
                        Course
                        </div>
                        <div className="contAssignContenido">
                            
                            <label for="Des"> </label> 
                                <select className="Des"
                                onChange={(e) => {
                                    setState({ ...state, numGroup: e.target.value });
                                  }} >
                                    <option disabled="">Select the course</option>
                                    {
                                        Courses.map((c,index)=>(
                                            <option value={index+1} key={index}>{c.nameCourse}</option>
                                        )
                                        )
                                    }
                                    
                                    
                                    
                                    
                            </select>
            
                        </div>
                    </div>
                </Form.Item>
                    <div className="contAssign3">
                        <div className="contAssignTitulo">
                        Indicators
                        </div>
                        <div className="contAssignContenido">
                            <Select
                                
                                isMulti
                                options={Indicators.map((I,index)=>(
                                    <option value={index} key={index}>{I.id}</option>
                                )
                                )}
                                
                            />
                            
            
                        </div>
                        

                    </div>
                <Form.Item
                    name="taskName"
                    rules={[
                      {
                        required: true,
                        
                      },
                    ]}
                >
                    <div className="contAssign3">
                        <div className="contAssignTitulo">
                        Task name
                        </div>
                        <input className="contAssignContenido" onChange={(e) => {
                      setState({ ...state, nameAssignment: e.target.value });
                    }}>
                        
                        </input>
                    </div>
                </Form.Item>
                    <div className="contAssign3">
                        <div className="contAssignTitulo">
                        Deadline
                        </div>
                        <div className="contAssignDateT">
                        Date 
                        </div>
                        <div className="contAssignDateC">
                            <form action="" method="">
                                <input type="date"></input>
                                
                            </form>
                        </div>
                        <div className="contAssignDateT">
                        Hour
                        </div>
                        <div className="contAssignDateC">
                            <form action="" method="">
                                <input type="time"></input>
                                
                            </form>
                        </div>
                    </div>
                <Form.Item
                    name="Description"
                    rules={[
                      {
                        required: true,
                        
                      },
                    ]}
                >
                    <div className="contAssign4">
                        <div className="contAssignTask">
                        Task description 
                        </div>
                        <input className="contAssignContenidoTask" onChange={(e) => {
                      setState({ ...state, description: e.target.value });
                    }}>
                        
                        </input>
                    </div>
                </Form.Item>
                <Form.Item
                    name="url"
                    rules={[
                      {
                        required: true,
                        
                      },
                    ]}
                >
                    <div className="contAssign3">
                        <div className="contAssignTitulo">
                            Add Url ( guide in pdf )
                        </div>
                        <input className="contAssignContenido" placeholder="Add your url here" >
                        
                        </input>
                    </div>
                </Form.Item>
                </Form>
                    <div className="contAssign5">
                        
                            <button className="EnviarTarea-button" onClick={handleHomework} >                        
                                Send Assessment
                            </button>
                    
                        
                    </div>
                        
                    
                </div>

            
        </div>
        
    );

}

/*
Fulfill Self-Assesment of house
Course Development



*/
