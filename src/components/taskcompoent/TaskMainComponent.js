import React, { useState } from "react";
import "./TaskMainComponent.css";
import SingleTask from "./atoms/SingleTask";
import CreateTaskModal from "./atoms/CreateTaskModal";
export default function TaskMainComponent({
  createTask,
  tasks,
  deletTask,
  updateTask,
}) {
  const [create, setCreate] = useState(false);
  return (
    <div className="task-main-container  position-relative">
      <div className="tasks-container  hide-scroll">
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <SingleTask
                index={index}
                updateTask={updateTask}
                deletTask={deletTask}
                task={task}
              />
            </div>
          );
        })}

        {tasks?.length === 0 && (
          <p className="no-tasks">No tasks at this time</p>
        )}
      </div>

      <div
        onClick={() => {
          setCreate(true);
        }}
        className="add-new-task flex-center-center cursor-p"
      >
        +
      </div>

      {create && (
        <CreateTaskModal
          show={create}
          onHide={() => {
            setCreate(false);
          }}
          createTask={createTask}
        />
      )}
    </div>
  );
}
