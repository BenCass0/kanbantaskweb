import React from "react";
import { Dialog} from "@mui/material";
import { FormCard } from "./Form";

interface NewTaskProps{
  showNewTask:boolean;
  onClose:()=>void;
}


export const NewTask:React.FC<NewTaskProps>=({showNewTask,onClose})=>{    
    return(
      <React.Fragment >
        <Dialog 
        open={showNewTask} 
        onClose={onClose} 
        PaperProps={{
          style:{
            width:'35%',
            marginLeft:'20%',
            backgroundColor:'rgba(44,44,56,255)',
            color:'white'
          }
        }}>
          <FormCard onClose={onClose}/>
        </Dialog>
      </React.Fragment>
    )
  }