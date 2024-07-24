import { Button } from "@mui/material"

interface Header{
    onClick:()=>void;
}

export const Header:React.FC<Header>=({onClick})=>{
    return(
        <div style={{display:'flex',height:'5em',backgroundColor:'rgba(44,44,56,255)'}}>
        <p style={{margin:'1.2em 0 0 24%',fontSize:'20px'}}>Platform Launch</p>
        <Button 
        style={{
          margin:'1.4em 0 0 50%',
          backgroundColor:'rgba(100,95,198,255)',
          color:'white',
          textTransform:'none',
          borderRadius:'40px',
          height:'40px'
        }} onClick={onClick}>
          + Add New Task</Button>
      </div>
    )
}