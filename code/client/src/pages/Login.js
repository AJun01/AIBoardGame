// pages/login.js
import React, { useState } from "react";
import loginButtonImg from "../assets/login.png";
import inputBubble from "../assets/bubble.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill out all fields!");
      return;
    }
  
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/user/login?email=${encodeURIComponent(
          email
        )}&password=${encodeURIComponent(password)}`,
        {
          method: "POST",
        }
      );
  
      if (response.ok) {
        const message = await response.text();
        if (message === "Login successful!") {
          alert(message);
          navigate("/Room");
        } else {
          alert(message);
        }
      } else {
        const errorMessage = await response.text();
        alert(`Login failed: ${errorMessage || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login. Please try again.");
    }
  };


  const handleSignUp = async () => {

    navigate("/SignUp");

  }


  return (
    <div className="bg-mainBackground flex items-center justify-center min-h-screen">
      <div>
        <h1 className="text-6xl font-primary mb-6 text-center text-mainFont">
          Welcome!
        </h1>

        <div className="mb-4">
          <label
            className="block text-lg font-primary mb-1 text-mainFont"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative w-full h-24 flex justify-center items-center -mt-5">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-md"
              style={{
                backgroundImage: `url(${inputBubble})`,
                backgroundSize: "108% 78%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <input
              type="email"
              id="email"
              className="relative w-3/4 h-10 mx-auto mt-1 px-3 py-2 border border-gray-300 rounded-md bg-transparent text-mainBackground placeholder-opacity-75 font-primary placeholder-mainBackground"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                backgroundColor: "transparent", //
                borderColor: "transparent",
              }}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-lg font-primary mb-1 text-mainFont"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative w-full h-24 flex justify-center items-center -mt-5">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-md"
              style={{
                backgroundImage: `url(${inputBubble})`,
                backgroundSize: "108% 78%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <input
              type="password"
              id="password"
              className="relative w-3/4 h-10 mx-auto mt-1 px-3 py-2  border-transparent rounded-md bg-transparent text-mainBackground placeholder-opacity-75 font-primary placeholder-mainBackground"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                backgroundColor: "transparent",
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          {" "}
          <img
            src={loginButtonImg}
            alt="Login Button"
            onClick={handleLogin}
            className="w-full cursor-pointer active:opacity-75 w-3/7 h-auto"
          />
        </div>

        <div className="flex justify-between mt-4">
          {/* <button
            onClick={() => alert("Forgot Password Clicked")}
            className="text-base text-mainGreen hover:underline font-primary"
          >
            Forgot Password?
          </button> */}
          <button
            onClick={handleSignUp}
            className="text-base text-mainGreen hover:underline font-primary"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
