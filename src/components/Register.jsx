import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";

export default function Register() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser, { isLoading: registerLoading, isError }] =
    useRegisterUserMutation();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };
    console.log(data);
    if (!registerLoading) {
      try {
        const res = await registerUser(data);
        console.log(res);
        if (res.error) {
          setMessage(res.error.data.message);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.log("Please provide a valid email and password");
        setMessage("Please provide a valid email and password");
      }
    }
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-sm border shadow bg-white mx-auto p-8">
        <h2 className="text-2xl font-semibold pt-5">Please Register</h2>
        <form
          onSubmit={handleRegister}
          className="space-y-5 mx-w-sm mx-auto pt-8"
        >
          <input
            type="username"
            name="username"
            id="username"
            onFocus={() => {
              setMessage("");
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onFocus={() => {
              setMessage("");
            }}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
          <input
            type="password"
            name="password"
            id="password"
            onFocus={() => {
              setMessage("");
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
          {message && <p className="text-red-500">{message}</p>}

          <button
            type="submit"
            className="w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded-md"
          >
            Regiter
          </button>
        </form>
        <p className="my-5 italic text-sm text-center">
          Already have an account?{" "}
          <Link className="text-red-700 px-1 underline" to="/login">
            Login
          </Link>{" "}
          here.
        </p>
      </div>
    </section>
  );
}
