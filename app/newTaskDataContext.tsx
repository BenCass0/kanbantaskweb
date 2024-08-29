import React,{createContext,ReactNode,useState} from 'react';
interface Subtask{
    name:string;
}

export type newTaskDataType={
    Title:string;
    Description: string;
    Status: string;
    Subtasks: Subtask[];
}

interface newTaskProviderProps{
    children:ReactNode;
}

export type newTaskContextType={
    userData:newTaskDataType|null;
    setUserData: React.Dispatch<React.SetStateAction<newTaskDataType|null>>;
}

const newTaskDataContext=createContext<newTaskContextType|undefined>(undefined);

const NewTaskProvider:React.FC<newTaskProviderProps>=({children})=>{

    const [userData,setUserData]=useState<newTaskDataType| null>(null);
    return(
        <newTaskDataContext.Provider value={{userData,setUserData}}>
            {children}
        </newTaskDataContext.Provider>
    )
}

export {newTaskDataContext,NewTaskProvider}