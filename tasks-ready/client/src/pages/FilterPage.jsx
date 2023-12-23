import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const FilterPage = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedType, setEditedType] = useState("");
  const [editedAssignee, setEditedAssignee] = useState("");

  const [activeFilter, setActiveFilter] = useState(null);

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
      axios
        .put(`http://localhost:5000/api/updatetask/${taskId}`, { status })
        .then((res) => {
          console.log("Task updated successfully");
        })
        .catch((error) => console.error("Failed updating task:", error));
    } catch (error) {
      console.error("Failed updating task:", error);
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
      const name = editedName;
      const type = editedType;
      const assignee = editedAssignee;
      await axios.put(
        `http://localhost:5000/api/updatetaskfields/${editTask._id}`,
        {
          name,
          type,
          assignee,
        }
      );
      setEditTask(null);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditTask(null);
  };

  const toggleFilter = (filter) => {
    setActiveFilter(filter === activeFilter ? null : filter);
  };

  const filteredTasks = tasks.filter(
    (task) =>
      (activeFilter === "pending" && !task.status) ||
      (activeFilter === "completed" && task.status)
  );

  return (
    <div className="">
      <Navbar />
      <div className=" container mx-auto mt-8">
        <h2 className=" text-2xl font-bold mb-4">Task List</h2>

        <div>
          <button
            onClick={() => toggleFilter("pending")}
            className={`text-red-600 mr-2 ${
              activeFilter === "pending" ? "font-bold" : ""
            }`}
          >
            Show Pending
          </button>
          <button
            onClick={() => toggleFilter("completed")}
            className={`text-green-600 mr-2 ${
              activeFilter === "completed" ? "font-bold" : ""
            }`}
          >
            Show Completed
          </button>
        </div>

        <ul>
          {filteredTasks.map((task) => (
            <li
              key={task._id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                {editTask && editTask._id === task._id ? (
                  <>
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                    <input
                      type="text"
                      value={editedType}
                      onChange={(e) => setEditedType(e.target.value)}
                    />
                    <input
                      type="text"
                      value={editedAssignee}
                      onChange={(e) => setEditedAssignee(e.target.value)}
                    />
                    <button onClick={handleSaveEdit}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <p
                      className={
                        task.status
                          ? "line-through text-red-600"
                          : "text-green-600"
                      }
                    >
                      {task.name}
                    </p>
                    <p className="border-red-800">Type: {task.type}</p>
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
                  } text-white font-bold py-1 px-2 rounded`}
                  onClick={() => handleComplete(task._id, task.status)}
                >
                  {task.status ? " Completed" : "Pending"}
                </button>
                <button
                  className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleEdit(task)}
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
    </div>
  );
};

export default FilterPage;
