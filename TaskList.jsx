import React from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = [
    "Complete React Assignment",
    "Review UX Project",
    "Submit Capstone Iteration 1",
    "Attend Web Development Class",
    "Work on Portfolio"
  ];

  return (
    <div className="task-list">
      <h2>My Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;