import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [task, setTask] = useState({
    name: "",
    type: "",
    assignee: "",
    status: false,
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/posttask",
        task
      );
      if (response.data.passed) {
        alert("Task Created");
      }
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-4">Task Mate</h1>
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
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="task-type"
              type="text"
              name="type"
              value={task.type}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="assignee-name"
            >
              Assignee Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="assignee-name"
              type="text"
              name="assignee"
              value={task.assignee}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
