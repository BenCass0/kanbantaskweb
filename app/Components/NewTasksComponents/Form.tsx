
import { FormProvider, useForm,useFieldArray} from "react-hook-form";
import React from "react";
import {InputLabel,Select,MenuItem,DialogContent,Typography} from "@mui/material";
import { InputForm } from "./InputForm";
import { StyledButton } from "../StyledButton";

interface Subtask{
    name:string;
}

interface FormValues{
    Title:string;
    Description: string;
    Status: string;
    Subtasks: Subtask[];

}

interface FormCard{
    onClose:()=>void;
}


//Export data in progress
console.log("Hola");
export const FormCard:React.FC<FormCard>=({onClose})=>{
    const maxSubTasks=3;
    const methods=useForm<FormValues>({
        defaultValues:{
            Title:"",
            Description:"",
            Status:"Doing",
            Subtasks:[]
        }
    });

    const {control,handleSubmit,register,formState:{errors}}=methods;

    const {fields,append}=useFieldArray({
        control,
        name:"Subtasks"
    });

    const addSubTask=()=>{
        if(fields.length<maxSubTasks){
            append({name:""});
        }
    }

    const onSubmit=(data:FormValues)=>{
        console.log(data);
    };

    return(
        <>
        <DialogContent>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography>Add New Task</Typography>
                    <InputForm 
                        titleinput="Title"
                        register={register}
                        errors={errors}
                        />
                    <InputForm 
                        titleinput="Description"
                        register={register}
                        errors={errors}
                        />
                    {fields.map((field,index)=>(
                        <InputForm 
                        key={field.id} 
                        titleinput={`Subtasks${index+1}`} 
                        register={register}
                        errors={errors}
                        />
                    ))}
                    <StyledButton type="button" title="+ Add New Subtasks" onClick={addSubTask}/>
                    <InputLabel style={{color:'white'}}>Status</InputLabel>
                        <Select
                        {...register("Status")}
                        defaultValue="Todo"
                        style={{width:'100%',color:"white",border:'1px solid white'}}
                        >
                            <MenuItem value={"Todo"}>Todo</MenuItem>
                            <MenuItem value={"Doing"}>Doing</MenuItem>
                            <MenuItem value={"Done"}>Done</MenuItem>
                        </Select>
                    <StyledButton type='submit' title="Create Task" onClick={onClose}/>
                </form>
            </FormProvider>
        </DialogContent>

        </>
    )
}