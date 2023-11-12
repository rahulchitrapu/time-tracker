import React, { useEffect, useState } from "react";

import "./SingleTask.css";

export default function SingleTask({ task, deletTask, updateTask, index }) {
  function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  const [time, setime] = useState(task?.time);

  useEffect(() => {
    let interval;
    if (task?.started) {
      interval = setInterval(() => {
        setime(time + 1);
        // updateTask('time',time + 1,index)
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time, task?.started]);

  return (
    <div className="single-task-container">
      <div className="flex-space-between-center">
        <p style={{ width: "calc(100% - 330px)" }} className="task-text">
          {task?.title}
        </p>

        <div
          style={{ width: "330px" }}
          className="flex-space-between-center timer-container "
        >
          <p className="time-for-task">{formatDuration(time)}</p>

          <div className="flex-flex-start-center">
            <div
              onClick={() => {
                updateTask("started", !task?.started, index);
              }}
              style={{ background: task?.started ? "#ED5050" : "#5056ED" }}
              className="start-stop-button cursor-p mr-16px"
            >
              {task?.started ? "Stop" : "Start"}
            </div>
            <div
              onClick={() => {
                deletTask(index);
              }}
              className="delete-task cursor-p flex-center-center"
            >
              X
            </div>
          </div>
        </div>
      </div>

      <div className="history-container  flex-flex-start-flex-start flex-column">
        <p className="history-container-text">History</p>

        <div className="mt-8px">
          {task?.history?.length === 0 ? (
            <p className="history-container-logs">
              No History Found, Click on the start button to track the timer
            </p>
          ) : (
            <p className="history-container-logs">1</p>
          )}
        </div>
      </div>
    </div>
  );
}
