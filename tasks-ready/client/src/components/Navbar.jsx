import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center text-2xl gap-6">
      <Link className="hover:text-blue-700 " to="/TaskManaging">
        Manage
      </Link>
      <Link className="hover:text-blue-700 " to="/FilterPage">
        View Tasks
      </Link>
    </div>
  );
};

export default Navbar;
