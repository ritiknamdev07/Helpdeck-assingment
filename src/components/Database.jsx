const Database = () => {
  const data = [
    { id: "ABC123", name: "Abu", department: "IT", specialty: "Software" },
    {
      id: "ABC124",
      name: "Ahmad",
      department: "Software",
      specialty: "Networking",
    },
    {
      id: "ABC125",
      name: "Ali",
      department: "Technical",
      specialty: "Hardware",
    },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <ul className="flex border-b border-gray-300">
          <li className="flex-1 text-center">
            <button className="w-full py-2 bg-teal-300 text-gray-800 font-bold">
              User
            </button>
          </li>
          <li className="flex-1 text-center">
            <button className="w-full py-2 text-gray-600">
              Operation Team
            </button>
          </li>
          <li className="flex-1 text-center">
            <button className="w-full py-2 text-gray-600">
              Technical Support
            </button>
          </li>
        </ul>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300"></th>
              <th className="p-2 border border-gray-300">Staff ID</th>
              <th className="p-2 border border-gray-300">Name</th>
              <th className="p-2 border border-gray-300">Department</th>
              <th className="p-2 border border-gray-300">Speciality</th>
              <th className="p-2 border border-gray-300">Setting</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="p-2 border border-gray-300">
                  <input type="checkbox" />
                </td>
                <td className="p-2 border border-gray-300">{row.id}</td>
                <td className="p-2 border border-gray-300">{row.name}</td>
                <td className="p-2 border border-gray-300">{row.department}</td>
                <td className="p-2 border border-gray-300">{row.specialty}</td>
                <td className="p-2 border border-gray-300 text-center">
                  <button className="text-gray-600 hover:text-blue-500 mr-2">
                    <i className="fas fa-pen"></i>
                  </button>
                  <button className="text-gray-600 hover:text-red-500">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Showing 1 to {data.length} of {data.length} entries
        </div>
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

export default Database;
