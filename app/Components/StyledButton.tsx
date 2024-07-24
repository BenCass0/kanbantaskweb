import { Button } from "@mui/material";

interface ButtonCardProps{
    type:string,
    title:string,
    onClick:()=>void;
}

export const StyledButton:React.FC<ButtonCardProps>=({type,title,onClick})=>{
    return(
        <Button 
        sx={{margin:'1.5em 0 0.5em 0',
            width:'100%',
            backgroundColor:"rgba(100,95,198,255)",
            color:'white',
            borderRadius:'20px',
            textTransform:'none'
        }}
        onClick={onClick}
        type={type}
        >{title}</Button>
    )
}