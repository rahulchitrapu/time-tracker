import React, { useEffect, useState } from "react";

import "./MainPage.css";
import Header from "../header/Header";
import TaskMainComponent from "../taskcompoent/TaskMainComponent";

export default function MainPage() {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );

  const createTask = (text) => {
    let obj = {
      title: text,
      time: 0,
      started: false,
      history: [],
    };

    setTasks([...tasks, obj]);
  };

  const deletTask = (index) => {
    setTasks(tasks.filter((e, i) => i !== index));
  };

  const updateTask = (key, value, index) => {
    let copyTask = tasks[index];

    copyTask[key] = value;

    setTasks([...tasks.slice(0, index), copyTask, ...tasks.slice(index + 1)]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("tasks", tasks);
    
  }, [tasks]);

  return (
    <div className="window-size  main-page-bg-color">
      <Header />

      <TaskMainComponent
        deletTask={deletTask}
        createTask={createTask}
        updateTask={updateTask}
        tasks={tasks}
      />
    </div>
  );
}
