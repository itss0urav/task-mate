import React, { useEffect, useState } from "react";
import axios from "../config/axios";
import Navbar from "../components/Navbar";
import { toast } from "react-hot-toast";
import { CiCircleRemove } from "react-icons/ci";
const TaskCreation = () => {
  const [users, setUsers] = useState([]);
  const [task, setTask] = useState({
    name: "",
    type: "",
    assignees: [],
    status: false,
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  function fetchUsers() {
    axios
      .get("/users/get")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }

  const handleChange = (e) => {
    if (e.target.name === "assignees") {
      setTask({ ...task, assignees: [...task.assignees, e.target.value] });
    } else {
      setTask({ ...task, [e.target.name]: e.target.value });
    }
  };

  const handleRemoveAssignee = (assigneeToRemove) => {
    setTask({
      ...task,
      assignees: task.assignees.filter(
        (assignee) => assignee !== assigneeToRemove
      ),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/posttask", task);
      if (response.data.passed) {
        toast.success("Task Created!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      toast.error("Failed to add task", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl my-4">Task Mate</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="task-name"
              >
                Task Name
              </label>
              <input
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="task-name"
                type="text"
                name="name"
                value={task.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="task-type"
              >
                Task Type
              </label>
              <input
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="task-type"
                type="text"
                name="type"
                value={task.type}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="assignee-name"
            >
              Assignee Names
            </label>
            <select
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="assignee-name"
              name="assignees"
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Select a user
              </option>
              {users.map((user) => (
                <option key={user._id} value={user.username}>
                  {user.username}
                </option>
              ))}
            </select>

            {task.assignees.map((assignee) => (
              <div
                key={assignee}
                className="m-3 inline-flex items-center bg-blue-100 text-blue-800 text-sm rounded mt-2 mr-2"
              >
                <span className="ml-2 mr-1">{assignee}</span>

                <CiCircleRemove
                  type="button"
                  onClick={() => handleRemoveAssignee(assignee)}
                  className="m-2 inline-block bg-blue-500 hover:bg-blue-600 text-white rounded-full h-6 w-6 text-xs items-center justify-center"
                />
              </div>
            ))}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskCreation;
