import axios from "../config/axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import v3 from "../assets/videoBg1.mp4";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("/userlogin", { username, password })
      .then((res) => {
        if (res.data.passed) {
          toast.success("Login Success");
          sessionStorage.setItem("user", JSON.stringify(res.data.user));
          sessionStorage.setItem("token", JSON.stringify(res.data.token));
          console.log(res.data.user, res.data.token);
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        }
      })
      .catch((error) => {
        toast.error("Login Failed");
        console.error(error);
      });
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <video
        autoPlay
        muted
        loop
        src={v3}
        className=" blur-sm  absolute inset-0 w-full h-full object-cover z-[-1]"
      ></video>
      <div className="text-xl mt-[10rem]  text-white text-center my-4">
        Login
      </div>
      <form className="mx-auto p-4 rounded-md  relative" onSubmit={handleLogin}>
        <video
          autoPlay
          muted
          loop
          src={v3}
          className=" rounded-md  absolute inset-0 w-full h-full object-cover z-[-1]"
        ></video>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <Link
            to="/signup"
            className="inline-block align-baseline font-bold text-sm text-cyan-200 hover:text-cyan-400"
          >
            New User? Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
