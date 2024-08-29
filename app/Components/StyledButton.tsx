import { Button } from "@mui/material";

interface ButtonCardProps{
    type:"button"|"submit"|"reset";
    title:string;
    onClick?:()=>void;
}

export const StyledButton:React.FC<ButtonCardProps>=({type,title,onClick})=>{
    return(
        <Button 
        className="mt-6 mb-2 w-full bg-[#645FC6] text-white rounded-lg text-base normal-case"
        onClick={onClick}
        type={type}
        >{title}</Button>
    );
};