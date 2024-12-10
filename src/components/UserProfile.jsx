import React from "react";
import { FaUser, FaPen } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="p-6 bg-gray-50 h-screen">
      <h1 className="text-2xl font-bold mb-6">User Profile</h1>

      <div className="flex gap-6 w-[1088px] h-[507px]  bg-[#55D6C2AD] ">
        <div className="flex-1 m-20 w-[371px] h-[326px] bg-white shadow-lg rounded-lg p-6 relative">
          <div className="absolute top-4 right-4">
            <FaPen className="text-gray-500 cursor-pointer hover:text-gray-700" />
          </div>

          <div className="flex flex-col items-center gap-4">
       
            <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center">
              <FaUser size={82} />
            </div>
  
            <div className="self-start">
              <p className="text-lg font-semibold">Username</p>
              <p>Contact Number</p>
              <p>Email</p>
              <p>Department</p>
            </div>
          </div>
        </div>

        <div className="w-[300px] mt-20 mr-10 h-[234px] flex flex-col  bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Give Your Feedback
          </h2>
          <input
            className="bg-gray-200 p-1 rounded  text-gray-500 mb-4"
            placeholder="[Lorem Ipsum]"
          />

     
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-400 text-xl ml-20 cursor-pointer">
              ★★★★★
            </span>
          </div>

   
          <button className="bg-teal-500 text-white text-sm px-4 py-2 rounded-md">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
