import React from "react";
import v3 from "../assets/videoBg.mp4";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function Introduction() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-black animate-fade-in-down">
      <video
        autoPlay
        muted
        loop
        src={v3}
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-center from-transparent via-black to-transparent opacity-50 z-20"></div>
      <div className="absolute top-0 right-0 p-6 space-x-4 z-30">
        <Link
          to="/Signup"
          className="text-black font-bold hover:text-cyan-300 transition duration-300 py-2 px-3 rounded-md text-lg shadow-white"
        >
          Signup
        </Link>
        <Link
          to="/Login"
          className="text-black font-bold hover:text-cyan-300 transition duration-300 py-2 px-3 rounded-md text-lg shadow-white"
        >
          Login
        </Link>
        <Link
          to="/Help"
          className="text-black font-bold hover:text-cyan-300 transition duration-300 py-2 px-3 rounded-md text-lg shadow-white"
        >
          Help
        </Link>
      </div>
      <div className="z-30 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-center w-full md:w-1/2 animate-fade-in-left">
          <div className="">
            <h1 className="font-roboto font-extrabold text-4xl md:text-6xl lg:text-8xl text-black  mb-4 tracking-wide neon-text shadow-white">
              Task Mate
            </h1>
            <p className=" text-center hidden md:flex text-black  text-sm md:text-lg lg:text-xl  neon-text shadow-white">
              Task Mate is a dynamic web application designed to streamline task
              management and improve productivity. It provides a user-friendly
              platform for assigning, tracking, and managing tasks in a
              collaborative environment.
            </p>
          </div>
        </div>
      </div>
      <p className=" text-center z-50 p-2 md:hidden flex text-black  text-sm md:text-lg lg:text-xl  neon-text shadow-white">
        Task Mate is a dynamic web application designed to streamline task
        management and improve productivity. It provides a user-friendly
        platform for assigning, tracking, and managing tasks in a collaborative
        environment.
      </p>

      <div className="absolute flex bottom-0 right-0 p-1 text-black font-bold text-sm md:text-lg neon-text  opacity-100">
        Created by @itss0urav <FaGithub className="mx-1" />
      </div>
    </div>
  );
}

export default Introduction;
