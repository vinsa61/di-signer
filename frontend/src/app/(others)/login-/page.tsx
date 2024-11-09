"use client";

import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState(""); // Track username input
  const [password, setPassword] = useState(""); // Track password input
  const [error, setError] = useState(""); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send login data to the backend API
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });


      const data = await response.json();

      console.log(data.message); // Check if the error message is correct

      // If the login is successful, save the token
      if (response.ok) {
        localStorage.setItem("token", data.token); // Store JWT in local storage
        alert("Login successful!");
        window.location.href = '/';
      } else {
        alert("Hell no!");
        setError(data.message); // Show error message from backend
      }
    } catch (error) {
      setError("An error occurred during login.");
    }
  };

  return (
    <div className="bg-gray-700 py-10 px-12 flex justify-center items-center h-screen">
        <form id="loginForm" className="flex flex-col gap-5 bg-gray-800 p-10 rounded-lg w-2/5" method="POST" onSubmit={handleSubmit}>
            
            <h1 className="text-4xl text-center">Signature System</h1>
            
            {/* Error message display */}
            {error && <p className="text-red-500 text-center">{error}</p>}

            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Track username input
              className="bg-gray-600 rounded p-1 text-white w-50 self-center"
              placeholder="Username"
              required
            />
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Track password input
              className="bg-gray-600 rounded p-1 text-white w-50 self-center"
              placeholder="Password"
              required
            />
            <button type="submit" className="rounded-lg bg-green-500 w-32 self-center">Login</button>
        </form>
    </div>
  );
}
