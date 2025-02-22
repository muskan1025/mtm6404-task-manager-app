import React, { useState } from "react";
import TaskItem from "./TaskItem";
import Card from "./Card";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    "Refactor Code for Better Performance",
    "Write Documentation for the Project",
    "Optimize App for Mobile Devices",
    "Test and Fix Backend API Integration",
    "Enhance UI with Better Styling",
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Card>
      <h2>Task List</h2>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add-btn" onClick={addTask}>Add Task</button>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={() => deleteTask(index)} />
        ))
      )}
    </Card>
  );
};

export default TaskList;
