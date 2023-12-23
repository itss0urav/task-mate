import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold text-gray-700 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
              <Link to="/">TaskMate</Link>
            </div>
          </div>
          <div className="flex-1 md:flex md:items-center md:justify-between">
            <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
              <Link className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 rounded-md dark:text-gray-200 dark:hover:text-gray-400 dark:hover:bg-gray-600 hover:bg-gray-200 md:mt-0" to="/FilterPage">
                View Tasks
              </Link>
              <Link className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 rounded-md dark:text-gray-200 dark:hover:text-gray-400 dark:hover:bg-gray-600 hover:bg-gray-200 md:mt-0" to="/TaskManaging">
                Manage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
