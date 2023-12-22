import React from "react";
import TaskCreation from "./TaskCreation";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TaskCreation />
    </div>
  );
};

export default Home;
