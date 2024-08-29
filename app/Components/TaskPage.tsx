import React,{useContext,useState} from "react";
import { ThemeModeContext } from "./themeModeContext.";
import { newTaskDataContext,newTaskContextType, newTaskDataType } from "../newTaskDataContext";
import { UserList } from "../taskComplete";

export const StatusTask=()=>{

    const context=useContext(ThemeModeContext);
    if(!context){
        throw new Error('---');
    }
    const {theme}=context;

    const [userData]=useState<newTaskDataType[]>([]);

    return(
    <div className={`pl-[23%] flex ${theme? 'bg-[#23232F]' : 'bg-[#f4f7fd]'}`}>
        <>
            <div className="w-[30%] h-[39em] text-left pt-2">
            <button className={`w-[12px] h-[12px] bg-cyan-500 rounded-full m-[0_10px_0_15px] ${theme? 'text-white' :'text-gray-500'}`}/>
                Todo</div>
            <UserList data={userData}/>    
        </>
        <div className="w-[30%] text-left pt-2">
        <button className="w-[12px] h-[12px] bg-purple-500 rounded-full m-[0_10px_0_15px]"/>
            Doing</div>
        <div className="w-[30%] text-left pt-2">
        <button className="w-[12px] h-[12px] bg-lime-300 rounded-full m-[0_10px_0_15px]"/>
            Done</div>
    </div>
    )
};

