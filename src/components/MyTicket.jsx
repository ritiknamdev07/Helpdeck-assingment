import { FiSearch } from "react-icons/fi";
const Ticket = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold mb-5">List of Ticket</h1>
      <div className="flex items-center rounded-2xl bg-gray-300 w-[220px] mb-5">
        <input
          className="bg-gray-300 rounded-xl p-1"
          type="search"
          name=""
          id=""
        />
        <FiSearch className="text-2xl" />
      </div>
      <div>
        Show:{" "}
        <select className="bg-[#6A676736] mb-5">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>{" "}
        Entries
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-300">Ticket No.</th>
            <th className="p-2 border border-gray-300">Subject</th>
            <th className="p-2 border border-gray-300">Status</th>
            <th className="p-2 border border-gray-300">Support by</th>
            <th className="p-2 border border-gray-300">Data</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-gray-100">
            <td className="p-2 border border-gray-300">1234</td>
            <td className="p-2 border border-gray-300">Login issue</td>
            <td className="p-2 border border-gray-300 bg-[#5CDB95] ">
              in Progress
            </td>
            <td className="p-2 border border-gray-300">Tech support</td>
            <td className="p-2 border border-gray-300">13/08/21</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="p-2 border border-gray-300">1124</td>
            <td className="p-2 border border-gray-300">New tucket</td>
            <td className="p-2 border border-gray-300 bg-blue-950">On hold</td>
            <td className="p-2 border border-gray-300">Operation Team</td>
            <td className="p-2 border border-gray-300">14/08/21</td>
          </tr>

          <tr className="even:bg-gray-100">
            <td className="p-2 border border-gray-300">1224</td>
            <td className="p-2 border border-gray-300">New request</td>
            <td className="p-2 border border-gray-300 bg-gray-600">Closed</td>
            <td className="p-2 border border-gray-300">Tech support</td>
            <td className="p-2 border border-gray-300">13/08/21</td>
          </tr>

          <tr className="even:bg-gray-100">
            <td className="p-2 border border-gray-300">1244</td>
            <td className="p-2 border border-gray-300">Ticket Submission</td>
            <td className="p-2 border border-gray-300 bg-[#5CDB95]">
              In Progress
            </td>
            <td className="p-2 border border-gray-300">Operation Team</td>
            <td className="p-2 border border-gray-300">14/04/21</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="p-2 border border-gray-300">1114</td>
            <td className="p-2 border border-gray-300">Login issue</td>
            <td className="p-2 border border-gray-300 bg-[#5CDB95]"></td>
            <td className="p-2 border border-gray-300">Tech support</td>
            <td className="p-2 border border-gray-300">3/08/21</td>
          </tr>
        </tbody>
      </table>
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

export default Ticket;
