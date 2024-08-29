import React from "react";
import { newTaskDataType } from "./newTaskDataContext";
interface TaskCreateProps{
    Title:string;
    SubTask: string;
}

const TaskCreate:React.FC<TaskCreateProps>=({Title,SubTask})=>{
    return(
    <div>
        <h3>{Title}</h3>
        <p>{SubTask}</p>
    </div>
    );
};

export const UserList=({data}:{data:newTaskDataType[]})=>{
    return (
        <>
            {data.map((task,index)=>(
                <TaskCreate key={index} Title={task.Title} SubTask={task.Subtasks[0]?.name}></TaskCreate>
            ))}
        </>
    )
}