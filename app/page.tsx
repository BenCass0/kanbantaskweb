"use client";

import NavBar from "./Components/NavBar";
import React,{useState} from "react";
import { NewTask } from "./Components/NewTasksComponents/CardNewTask";
import {StatusTask} from "./Components/TaskPage";
import { Header } from "./Components/Header";
import { ThemeModeProvider } from "./Components/themeModeContext.";
import { NewTaskProvider } from "./newTaskDataContext";
export default function Home() {
  const [showNewTask,setShowNewTask]=useState(false);

  const handleAddNewTask=()=>{
    setShowNewTask(true);
  };

  const handleCloseNewTask=()=>{
    setShowNewTask(false);
  };

  return (
    <main>
      <NewTaskProvider>
      <ThemeModeProvider>
        <NavBar/>
        <Header onClick={handleAddNewTask}/>
        <StatusTask/>
        {showNewTask && <NewTask showNewTask={showNewTask} onClose={handleCloseNewTask}/>}
      </ThemeModeProvider>
      </NewTaskProvider>
    </main>
  );
}
