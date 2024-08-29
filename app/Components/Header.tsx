import { Button } from "@mui/material"
import { ThemeModeContext } from "./themeModeContext.";
import { useContext } from "react";
interface Header{
    onClick:()=>void;
}

export const Header:React.FC<Header>=({onClick})=>{
  const context=useContext(ThemeModeContext);
  if(!context){
    throw new Error('---');
  }
  const {theme}=context;
    return(
        <div className={`flex h-[5em]  ${theme? 'bg-[#2c2c38]':'bg-[#ffffff]'}`}>
        <p className={`m-[0.9em_0_0_24%] text-[24px] font-semibold ${theme? 'text-white':'text-black'}`}>Platform Launch</p>
        <Button 
          className="ml-[45%] mt-[1.4em] bg-[#645FC6] text-white normal-case rounded-full
          h-[40px] w-[180px] font-semibold text-[15px]
          "
        onClick={onClick}>
          + Add New Task</Button>
      </div>
    )
}