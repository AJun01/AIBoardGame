// pages/signup.js
import React, { useState } from "react";
import signupButtonImg from "../assets/login.png";
import inputBubble from "../assets/bubble.png";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      alert("Please fill out all fields!");
      return;
    }
  
    const newUser = {
      username: name,
      password: password,
      email: email,
      doc: new Date().toISOString().split("T")[0], // Set current date as 'doc'
    };
  
    try {
      const response = await fetch("http://localhost:8080/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
  
      if (response.ok) {
        alert("Sign-up successful!");
        navigate("/Room");
      } else {
        const errorData = await response.json();
        alert(`Sign-up failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred during sign-up. Please try again.");
    }
  };

  return (
    <div className="bg-mainBackground flex items-center justify-center min-h-screen">
      <div>
        <h1 className="text-6xl font-primary mb-6 text-center text-mainFont">
          Create Account
        </h1>

        <div className="mb-4">
          <label
            className="block text-lg font-primary mb-1 text-mainFont"
            htmlFor="name"
          >
            Name
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
              type="text"
              id="name"
              className="relative w-3/4 h-10 mx-auto mt-1 px-3 py-2 border border-gray-300 rounded-md bg-transparent text-mainBackground placeholder-opacity-75 font-primary placeholder-mainBackground"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
          </div>
        </div>

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
                backgroundColor: "transparent",
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
              className="relative w-3/4 h-10 mx-auto mt-1 px-3 py-2 border border-gray-300 rounded-md bg-transparent text-mainBackground placeholder-opacity-75 font-primary placeholder-mainBackground"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
        <button
            onClick={handleSignUp}
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer active:opacity-75 hover:bg-blue-600 transition duration-200 ease-in-out"
            >
            Sign Up
            </button>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate("/login")}
            className="text-base text-mainGreen hover:underline font-primary"
          >
            Already have an account? Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;