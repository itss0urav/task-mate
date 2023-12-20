import axios from "axios";
import React, { useState } from "react";

const Auth = () => {
  const [page, setPage] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const user = {
    username,
    email,
    password,
    confirmPassword,
  };

  const handleSignup = () => {
    if (password === confirmPassword) {
      axios
        .post("http://localhost:5000/api/usersignup", user)
        .then((res) => {
          // console.log(res.data,"post signup")
          if (res.data.passed === true) {
            alert("Signup Success");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("password doesn't match");
    }
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/api/userlogin", username, password)
      .then((req, res) => {
        if (res.data.passed === true) {
          alert("Login Success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {page === false ? (
        <div className=" flex flex-col  justify-center p-1 m-1 bg-gray-400 rounded-md">
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-md"
            type="text"
            placeholder="enter username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md"
            type="email"
            placeholder="enter email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md"
            type="password"
            placeholder="enter password"
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border rounded-md"
            type="password"
            placeholder="enter confirm password"
          />
          <button onClick={handleSignup}>SignUp</button>
          <div className="">
            Already Have an account?
            <div
              onClick={() => {
                setPage(true);
              }}
              className="text-cyan-200"
            >
              Login
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col  justify-center p-1 m-1 bg-gray-400 rounded-md">
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-md"
            type="text"
            placeholder="enter username"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md"
            type="password"
            placeholder="enter password"
          />
          <button onClick={handleLogin}>Login</button>
          <div className="">
            New User?
            <div
              onClick={() => {
                setPage(false);
              }}
              className="text-cyan-200"
            >
              SignUp
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
