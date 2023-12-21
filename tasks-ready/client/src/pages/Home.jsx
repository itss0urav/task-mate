import React from "react";
import TaskCreation from "./TaskCreation";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="">
        <Link to="/TaskManaging">TaskManaging</Link>
      </div>
      <TaskCreation />
    </div>
  );
};

export default Home;
