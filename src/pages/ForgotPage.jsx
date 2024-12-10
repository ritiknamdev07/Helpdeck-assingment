import React from "react";
import { Link } from "react-router-dom";

function ForgotPage() {
  return (
    <div className="flex items-center m-1 justify-center h-[800px] bg-[#55D6C2]">
      <div className="bg-teal-200 p-8 rounded shadow-md w-96">
        <form className="space-y-4 flex flex-col  ">
          <div>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-teal-500"
              placeholder="Enter your Email"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2  bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400"
          >
            Submit
          </button>
          <Link to="/sign-in">
            <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
              Sign in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ForgotPage;
