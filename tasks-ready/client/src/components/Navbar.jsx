import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold text-gray-700 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
              <Link to="/home">TaskMate</Link>
            </div>
          </div>

          <div className="flex-1 md:flex md:items-center md:justify-between">
            <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
              <Link
                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 rounded-md dark:text-gray-200 dark:hover:text-gray-400 dark:hover:bg-gray-600 hover:bg-gray-200 md:mt-0"
                to="/FilterPage"
              >
                View Tasks
              </Link>
              <Link
                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 rounded-md dark:text-gray-200 dark:hover:text-gray-400 dark:hover:bg-gray-600 hover:bg-gray-200 md:mt-0"
                to="/TaskManaging"
              >
                Manage
              </Link>
            </div>
          </div>
          {/* User info or login button */}
          {user ? (
            <div className="flex items-center">
              <div className="text-cyan-400 mr-4">{user.username}</div>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
