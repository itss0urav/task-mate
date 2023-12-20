import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskManaging = () => {
  const [tasks, setTasks] = useState([]);
console.log(tasks)
  useEffect(() => {
    // Fetch tasks from the server
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gettask");
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleComplete = async (taskId, currentStatus) => {
    try {
      const newStatus = !currentStatus; // Toggle the status
      await axios.put(`http://localhost:5000/api/completetask/${taskId}`, { status: newStatus });
      // Refresh the task list after updating the status
      const response = await axios.get("http://localhost:5000/api/gettask");
      setTasks(response.data);
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/deletetask/${taskId}`);
      // Refresh the task list after deleting a task
      const response = await axios.get("http://localhost:5000/api/gettask");
      setTasks(response.data);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="flex justify-between items-center border-b py-2">
            <div>
              <p className={task.status ? "line-through" : ""}>{task.name}</p>
              <p>Type: {task.type}</p>
              <p>Assignee: {task.assignee}</p>
            </div>
            <div>
              <button
                className={`mr-2 ${task.status ? 'bg-blue-500 hover:bg-blue-700' : 'bg-green-500 hover:bg-green-700'} text-white font-bold py-1 px-2 rounded`}
                onClick={() => handleComplete(task._id, task.status)}
              >
                {task.status ? "Pending" : "Complete"}
              </button>
              <button
                className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                // Add your edit functionality here
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManaging;
