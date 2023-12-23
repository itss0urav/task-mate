import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const TaskManaging = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedType, setEditedType] = useState("");
  const [editedAssignee, setEditedAssignee] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gettask");
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [tasks]);

  const handleComplete = async (taskId, currentStatus) => {
    try {
      const status = !currentStatus;
      await axios.put(`http://localhost:5000/api/updatetask/${taskId}`, { status });
    } catch (error) {
      console.error("Failed Updating", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/deletetask/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setEditedName(task.name);
    setEditedType(task.type);
    setEditedAssignee(task.assignee);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://localhost:5000/api/updatetaskfields/${editTask._id}`, {
        name: editedName,
        type: editedType,
        assignee: editedAssignee,
      });
      setEditTask(null);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditTask(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Task List</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task._id} className="flex justify-between items-center border-b py-2">
              <div>
                {editTask && editTask._id === task._id ? (
                  <>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="editedName">
                      Task Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter task"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="editedType">
                      Task Type
                    </label>
                    <input
                      type="text"
                      placeholder="Enter type"
                      value={editedType}
                      onChange={(e) => setEditedType(e.target.value)}
                      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="editedAssignee">
                      Assignee Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter assignee"
                      value={editedAssignee}
                      onChange={(e) => setEditedAssignee(e.target.value)}
                      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSaveEdit}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className={task.status ? "line-through" : ""}>{task.name}</p>
                    <p>Type: {task.type}</p>
                    <p>Assignee: {task.assignee}</p>
                  </>
                )}
              </div>
              <div>
                <button
                  className={`mr-2 ${
                    task.status
                      ? "bg-blue-500 hover:bg-blue-700"
                      : "bg-green-500 hover:bg-green-700"
                  } text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline`}
                  onClick={() => handleComplete(task._id, task.status)}
                >
                  {task.status ? " Completed" : "Pending"}
                </button>
                <button
                  className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleEdit(task)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManaging;
