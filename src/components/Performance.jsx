import React from "react";
import { FaUser } from "react-icons/fa";

const Performance = () => {
  return (
    <div className="p-6 bg-gray-50 h-screen">
      <h1 className="text-3xl font-bold mb-6">Performance</h1>

      <div className="flex gap-6">
     
        <div className="flex-1">
          <div className="  p-4 rounded-lg shadow-lg mb-10">
            <div className="flex  items-center gap-20">
              <div className="w-56 h-56  bg-gray-300 rounded-3xl flex items-center justify-center">
                <FaUser size={150} />
              </div>
              <div className="bg-gray-200 p-6 rounded-2xl">
                <h2 className="text-2xl mb-5 font-semibold">
                  Technical Support Name
                </h2>
                <p>Contact No: 0123456789</p>
                <p>Department: ABC</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Total Ticket Handle 5
            </h2>
            <p>
              Ticket Solved: <span className="font-semibold">2</span>
            </p>
            <p>
              Ticket Pending: <span className="font-semibold">1</span>
            </p>
            <p>
              Ticket in Progress: <span className="font-semibold">2</span>
            </p>
            <p className="flex items-center gap-2">
              Rating:
              <span className="text-yellow-400">★★★★★</span>
            </p>
          </div>
        </div>

        <div className="w-64">
          {[
            "Technical Support 1",
            "Technical Support 2",
            "Technical Support 3",
          ].map((support, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-200 p-3 rounded-lg mb-4 shadow-lg"
            >
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <FaUser size={42} />
              </div>
              <div>
                <h3 className=" font-semibold">{support}</h3>
                <button className="bg-[#55D6C2] text-white text-sm px-3 py-1 rounded-md">
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
