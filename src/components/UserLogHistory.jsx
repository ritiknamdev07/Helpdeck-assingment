import React from "react";

const UserLogHistory = () => {
  return (
    <div className="p-5 w-[1060px]  ">
      <h1 className="text-2xl font-semibold mb-5">User Log History</h1>
      <div>
        Show:{" "}
        <select className="bg-[#6A676736] mb-5">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>{" "}
        Entries
      </div>
      <hr />
      <div>
        <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300">No.</th>
              <th className="p-2 border border-gray-300">Data/Sign InTime</th>
              <th className="p-2 border border-gray-300">Staff</th>
              <th className="p-2 border border-gray-300">Department</th>
              <th className="p-2 border border-gray-300">Activity</th>
              <th className="p-2 border border-gray-300">Date/Sign Out Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-100">
              <td className="p-2 border border-gray-300">1.</td>
              <td className="p-2 border border-gray-300">130821/0800</td>
              <td className="p-2 border border-gray-300">XL000001</td>
              <td className="p-2 border border-gray-300">OT</td>
              <td className="p-2 border border-gray-300">Create Team</td>
              <td className="p-2 border border-gray-300">130821/0815</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="p-2 border border-gray-300">2.</td>
              <td className="p-2 border border-gray-300">130821/0800</td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300">130821/0810</td>
            </tr>

            <tr className="even:bg-gray-100">
              <td className="p-2 border border-gray-300">3.</td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
            </tr>

            <tr className="even:bg-gray-100">
              <td className="p-2 border border-gray-300">4.</td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="p-2 border border-gray-300">5.</td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">Showing 1 to 5 of 5 entries</div>
        <div className="flex space-x-2">
          <button className="px-2 py-1 text-sm border border-gray-300 rounded">
            «
          </button>
          <button className="px-2 py-1 text-sm border border-gray-300 rounded">
            1
          </button>
          <button className="px-2 py-1 text-sm border border-gray-300 rounded">
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogHistory;
