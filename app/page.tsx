"use client";

import NavBar from "./Components/NavBar";
import React,{useState} from "react";
import { NewTask } from "./Components/NewTasksComponents/CardNewTask";
import {StatusTask} from "./Components/NewTasksComponents/inputCard";
import { Header } from "./Components/Header";
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
      <NavBar/>
      <Header onClick={handleAddNewTask}/>
      <StatusTask/>
      {showNewTask && <NewTask showNewTask={showNewTask} onClose={handleCloseNewTask}/>}
    </main>
  );
}
