import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";

export default function Login() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [loginUser, { isLoading: loginLoading, isError }] =
    useLoginUserMutation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data);
    if (!loginLoading) {
      try {
        const res = await loginUser(data);
        const { user, accessToken } = res.data.data;
        if (res.error) {
          setMessage(res.error.data.message);
        } else {
          console.log(res);
          dispatch(setUser({ user }));
          navigate("/");
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
        <h2 className="text-2xl font-semibold pt-5">Please Login</h2>
        <form onSubmit={handleLogin} className="space-y-5 mx-w-sm mx-auto pt-8">
          <input
            type="email"
            name="email"
            id="email"
            onFocus={() => {
              setMessage("");
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
          <input
            type="password"
            name="password"
            onFocus={() => {
              setMessage("");
            }}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
          {message && <p className="text-red-500">{message}</p>}

          <button
            type="submit"
            disabled={loginLoading}
            className="w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded-md"
          >
            {loginLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <p className="my-5 italic text-sm text-center">
          Don't have an account?{" "}
          <Link className="text-red-700 px-1 underline" to="/register">
            Register
          </Link>{" "}
          here.
        </p>
      </div>
    </section>
  );
}
