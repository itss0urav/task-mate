import axios from "../config/axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import v3 from "../assets/videoBg1.mp4";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    axios
      .post("/usersignup", {
        username,
        role: "user",
        email,
        password,
      })
      .then((res) => {
        if (res.data.passed) {
          toast.success("Signup Success");
        }
      })
      .catch((error) => {
        toast.error("Signup Failed");
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-xl text-center my-4">Signup</div>
      <form
        className="mx-auto p-4 rounded-md w-[20rem]  relative"
        onSubmit={handleSignup}
      >
        <video
          autoPlay
          muted
          loop
          src={v3}
          className="rounded-md absolute inset-0 w-full h-full object-cover z-[-1]"
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
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
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
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <Link
            to="/login"
            className="inline-block align-baseline font-bold text-sm text-cyan-200 hover:text-cyan-400"
          >
            Have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
