import React from "react";

export const StatusTask=()=>{
    return(
    <div className="bg-purple-700 ml-[20%] flex">
        <div className="w-[30%] h-[39em] text-left pt-2" style={{backgroundColor:'rgba(35,35,47,255)'}}>
        <button style={{width:'12px',height:'12px',backgroundColor:'rgb(0, 255, 255)',borderRadius:'50%',margin:'0 10px 0 15px'}}/>
            Todo</div>
        <div className="w-[30%] text-left pt-2" style={{backgroundColor:'rgba(35,35,47,255)'}}>
        <button style={{width:'12px',height:'12px',backgroundColor:'purple',borderRadius:'50%',margin:'0 10px 0 15px'}}/>
            Doing</div>
        <div className="w-[30%] text-left pt-2" style={{backgroundColor:'rgba(35,35,47,255)'}}>
        <button style={{width:'12px',height:'12px',backgroundColor:'rgb(144,238,144)',borderRadius:'50%',margin:'0 10px 0 15px'}}/>
            Done</div>
    </div>
    )
};

