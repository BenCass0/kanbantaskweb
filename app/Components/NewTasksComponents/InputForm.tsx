
import { Typography } from "@mui/material";


export function InputForm({titleinput,register,errors}){
    return(
        <>
        <Typography>{titleinput}</Typography>
        <input
        style={{
        width:'100%',
        border:'1px solid gray',
        color:'white',
        backgroundColor:'rgba(44,44,56,255)',
        }}
        {...register(titleinput,{required:true})}
        />
        {errors[titleinput] && <span>Field required</span>}
        </>
    )

}