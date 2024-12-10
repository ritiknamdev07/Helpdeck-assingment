import React from "react";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div className="flex items-center m-1 justify-center h-[800px] bg-[#55D6C2]">
      <div className="bg-teal-200 p-8 rounded shadow-md w-96">
        <h1 className="text-center text-xl font-bold mb-6">Helpdesk System</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-teal-500"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-teal-500"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-teal-500"
              placeholder="Enter your Email"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <Link to="/forgot-page" className="text-red-500 hover:underline">
            Forgot password
          </Link>
          <Link to="/sign-in" className="text-black hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
