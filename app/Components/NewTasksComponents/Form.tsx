
import { FormProvider, useForm,useFieldArray} from "react-hook-form";
import React, {useEffect, useState } from "react";
import {InputLabel,Select,MenuItem,DialogContent,Typography, IconButton} from "@mui/material";
import { InputForm } from "./InputForm";
import { StyledButton } from "../StyledButton";
import { icons } from "@/app/Assets/Icons";
import {newTaskDataType} from "@/app/newTaskDataContext";

import Image from "next/image";


interface FormCard{
    onClose:()=>void;
}


export const FormCard:React.FC<FormCard>=({onClose})=>{
    
    const [userData,setUserData]=useState<newTaskDataType[]>([]);

    const maxSubTasks=3;

    const methods=useForm<newTaskDataType>({
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

   // const onSubmit=(data:FormValues)=>{
        //console.log(data);
        //setUserData(data);
        //onClose();
    //};

    const onSubmit=(data:newTaskDataType)=>{
        setUserData((prevData)=>[...prevData,data]);
        console.log("Form submitted:",data);
        onClose();
    }

    return(
        <>
        <DialogContent>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex">
                        <Typography style={{fontWeight:700,letterSpacing:1,marginTop:'5px'}}>Add New Task</Typography>
                        <IconButton className="ml-[20vmax]">
                            <Image src={icons.iconCross} alt='cross' onClick={onClose}/>
                        </IconButton>
                    </div>
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
                        className="w-full text-white border border-white focus:border-transparent"
                        >
                            <MenuItem value={"Todo"}>Todo</MenuItem>
                            <MenuItem value={"Doing"}>Doing</MenuItem>
                            <MenuItem value={"Done"}>Done</MenuItem>
                        </Select>
                    <StyledButton type='submit' title="Create Task" />
                </form>
            </FormProvider>
            
        </DialogContent>

        </>
    )
}