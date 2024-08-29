
import { Typography } from "@mui/material";
import { FieldErrors,UseFormRegister } from "react-hook-form";

interface InputFormProps{
    titleinput:string;
    register:UseFormRegister<any>;
    errors:FieldErrors<any>;
}

export const InputForm:React.FC<InputFormProps>=({titleinput,register,errors})=>{
    return(
        <div style={{marginTop:'15px'}}>
        <Typography>{titleinput}</Typography>
        <input
        className="w-full h-[35px] border border-gray-500 text-white bg-[#2c2c38] focus:border-white hover:border-white"
        {...register(titleinput,{required:true})}
        />
        {errors[titleinput] && <span>Field required</span>}
        </div>
    )

}